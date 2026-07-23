import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

// ─── Supabase client ──────────────────────────────────────────────────────────
const getSupabaseClient = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return null
  return createClient(url, key)
}

// ─── Resend email client ──────────────────────────────────────────────────────
const getResendClient = () => {
  const key = process.env.RESEND_API_KEY
  if (!key) return null
  return new Resend(key)
}

// ─── Email HTML template ──────────────────────────────────────────────────────
function buildEmailHtml(name: string, email: string, subject: string | null, message: string) {
  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8" /></head>
    <body style="font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px; margin: 0;">
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #0ea5e9, #f59e0b); padding: 28px 32px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">
            📬 New Contact Form Submission
          </h1>
          <p style="color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 14px;">
            Someone reached out via your portfolio website
          </p>
        </div>

        <!-- Body -->
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; width: 120px;">
                <strong style="color: #555; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Name</strong>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-size: 15px;">
                ${name}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                <strong style="color: #555; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Email</strong>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                <a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none; font-size: 15px;">${email}</a>
              </td>
            </tr>
            ${subject ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                <strong style="color: #555; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Subject</strong>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-size: 15px;">
                ${subject}
              </td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0;" valign="top">
                <strong style="color: #555; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message</strong>
              </td>
              <td style="padding: 10px 0; color: #333; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">
                ${message}
              </td>
            </tr>
          </table>

          <!-- Reply button -->
          <div style="margin-top: 28px; text-align: center;">
            <a href="mailto:${email}?subject=Re: ${subject || 'Your enquiry'}"
               style="display: inline-block; background: linear-gradient(135deg, #0ea5e9, #f59e0b); color: #ffffff; padding: 13px 32px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 15px;">
              Reply to ${name} →
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: #f8f8f8; padding: 16px 32px; text-align: center;">
          <p style="margin: 0; color: #999; font-size: 12px;">
            This message was submitted via <strong>yibeltaldesign.pro.et</strong> · ${new Date().toUTCString()}
          </p>
        </div>
      </div>
    </body>
    </html>
  `
}

// ─── POST — receive form submission ──────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ success: false, error: 'Invalid email format' }, { status: 400 })
    }

    const cleanName    = name.trim()
    const cleanEmail   = email.trim().toLowerCase()
    const cleanSubject = subject?.trim() || null
    const cleanMsg     = message.trim()

    // 1️⃣  Save to Supabase
    const supabase = getSupabaseClient()
    if (supabase) {
      const { error: dbError } = await supabase
        .from('contact_messages')
        .insert([{
          name: cleanName,
          email: cleanEmail,
          subject: cleanSubject,
          message: cleanMsg,
          created_at: new Date().toISOString(),
        }])
      if (dbError) console.error('Supabase insert error:', dbError)
    }

    // 2️⃣  Send email notification via Resend
    const resend = getResendClient()
    if (resend) {
      const { error: emailError } = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',   // use this until you verify a domain
        to: ['yibeltal2127@gmail.com'],
        replyTo: cleanEmail,
        subject: `New enquiry from ${cleanName}${cleanSubject ? ` — ${cleanSubject}` : ''}`,
        html: buildEmailHtml(cleanName, cleanEmail, cleanSubject, cleanMsg),
      })
      if (emailError) console.error('Resend email error:', emailError)
    } else {
      // Fallback log when Resend not configured
      console.log('📬 Contact form submission:', { name: cleanName, email: cleanEmail, subject: cleanSubject, message: cleanMsg })
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully' }, { status: 200 })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}
