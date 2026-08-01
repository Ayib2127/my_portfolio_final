'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Section, { SectionHeader } from '@/components/ui/Section'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Button from '@/components/ui/Button'
import { personalInfo } from '@/data/personal'
import { HiMail, HiPhone, HiLocationMarker, HiCheckCircle } from 'react-icons/hi'
import { FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa'

// ─── Service options ──────────────────────────────────────────────────────────
const serviceOptions = [
  { value: '', label: 'Select a service...' },
  { value: 'Structural Design & Analysis', label: '🏗️  Structural Design & Analysis' },
  { value: 'Engineering Software Training', label: '🖥️  Engineering Software Training' },
  { value: 'Consulting & Design Review', label: '📋  Consulting & Design Review' },
  { value: 'Other', label: '💬  Other / General Inquiry' },
]

// ─── Component ────────────────────────────────────────────────────────────────
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim())    newErrors.name    = 'Name is required'
    if (!formData.email.trim())   newErrors.email   = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
                                  newErrors.email   = 'Invalid email format'
    if (!formData.service)        newErrors.service = 'Please select a service'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          // combine service + subject into the subject field for the API
          subject: formData.service + (formData.subject ? ` — ${formData.subject}` : ''),
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', service: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Section id="contact" background="gray">
      <SectionHeader
        subtitle="Get In Touch"
        title="Contact Me"
        description="Have a project in mind or need engineering software training? Let's discuss how I can help"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">

        {/* ── Left: Contact info card ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl p-8 text-white shadow-2xl h-full flex flex-col">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Let&apos;s Connect</h3>
            <p className="text-white/90 mb-8 text-base sm:text-lg leading-relaxed">
              Available for structural design, consulting, and software training — remotely worldwide or in-person in Addis Ababa.
              Replies within 24 hours.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8 flex-1">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-11 h-11 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiMail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-white/70 mb-0.5">Email</p>
                  <p className="font-semibold text-sm break-all">{personalInfo.email}</p>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-11 h-11 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiPhone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/70 mb-0.5">Phone / WhatsApp</p>
                  <p className="font-semibold text-sm">{personalInfo.phone}</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl">
                <div className="w-11 h-11 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiLocationMarker className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/70 mb-0.5">Location</p>
                  <p className="font-semibold text-sm">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-white/70 text-sm mb-3">Connect on social</p>
              <div className="flex flex-wrap gap-3">
                {personalInfo.social.linkedin && (
                  <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer"
                    className="w-11 h-11 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white hover:text-primary-600 transition-all duration-300"
                    aria-label="LinkedIn">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                )}
                {personalInfo.social.telegram && (
                  <a href={personalInfo.social.telegram} target="_blank" rel="noopener noreferrer"
                    className="w-11 h-11 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white hover:text-primary-600 transition-all duration-300"
                    aria-label="Telegram">
                    <FaTelegram className="w-5 h-5" />
                  </a>
                )}
                {personalInfo.social.whatsapp && (
                  <a href={personalInfo.social.whatsapp} target="_blank" rel="noopener noreferrer"
                    className="w-11 h-11 bg-white/20 rounded-lg flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300"
                    aria-label="WhatsApp">
                    <FaWhatsapp className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            <div className="w-32 h-1 ethiopian-accent rounded-full mt-8" />
          </div>
        </motion.div>

        {/* ── Right: Form ── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {submitStatus === 'success' ? (
            /* ── Success state ── */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col items-center justify-center text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <HiCheckCircle className="w-12 h-12 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
              <p className="text-gray-600 mb-2">
                Thank you for reaching out. I&apos;ll review your enquiry and get back to you within <strong>24 hours</strong>.
              </p>
              <p className="text-sm text-gray-400 mb-8">
                A confirmation has been sent to your email address.
              </p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="text-primary-600 font-semibold hover:underline text-sm"
              >
                Send another message →
              </button>
            </motion.div>
          ) : (
            /* ── Form ── */
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg space-y-5">

              {/* Name */}
              <Input
                label="Full Name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
              />

              {/* Email */}
              <Input
                label="Email Address"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
              />

              {/* Service Type — required */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Service Required <span className="text-red-500">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    errors.service
                      ? 'border-red-400 bg-red-50'
                      : 'border-gray-300 hover:border-primary-400'
                  }`}
                >
                  {serviceOptions.map(opt => (
                    <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-red-500 text-xs mt-1">{errors.service}</p>
                )}
              </div>

              {/* Subject — optional */}
              <Input
                label="Subject (Optional)"
                name="subject"
                type="text"
                placeholder="Brief description of your project"
                value={formData.subject}
                onChange={handleChange}
              />

              {/* Message */}
              <Textarea
                label="Message"
                name="message"
                placeholder="Tell me about your project, requirements, timeline, or any questions..."
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                rows={5}
                required
              />

              {/* Submit */}
              <Button
                type="submit"
                className="w-full"
                size="lg"
                isLoading={isSubmitting}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </Button>

              {/* Response time note */}
              <p className="text-center text-xs text-gray-400">
                ⏱ I typically respond within 24 hours
              </p>

              {/* Error state */}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-200 text-sm">
                  Failed to send. Please try again or reach out directly at{' '}
                  <a href={`mailto:${personalInfo.email}`} className="underline font-semibold">
                    {personalInfo.email}
                  </a>
                </div>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  )
}
