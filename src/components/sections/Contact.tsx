'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Section, { SectionHeader } from '@/components/ui/Section'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Button from '@/components/ui/Button'
import { personalInfo } from '@/data/personal'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaLinkedin, FaGithub, FaTwitter, FaTelegram } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
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
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">Let&apos;s Connect</h3>
            <p className="text-white/90 mb-8 text-lg">
              I&apos;m available for freelance projects, consulting, and training opportunities. 
              Feel free to reach out through any of the following channels.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiMail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Email</p>
                  <p className="font-semibold">{personalInfo.email}</p>
                </div>
              </a>


              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiPhone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Phone / Call</p>
                  <p className="font-semibold">{personalInfo.phone}</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-lg rounded-xl">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiLocationMarker className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Location</p>
                  <p className="font-semibold">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-white/70 mb-4">Follow me on social media</p>
              <div className="flex space-x-4">
                {personalInfo.social.linkedin && (
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white hover:text-primary-600 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                )}
                {personalInfo.social.github && (
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white hover:text-primary-600 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                )}
                {personalInfo.social.twitter && (
                  <a
                    href={personalInfo.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white hover:text-primary-600 transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="w-6 h-6" />
                  </a>
                )}
                {personalInfo.social.telegram && (
                  <a
                    href={personalInfo.social.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white hover:text-primary-600 transition-all duration-300"
                    aria-label="Telegram"
                  >
                    <FaTelegram className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>

            {/* Ethiopian Flag Accent */}
            <div className="w-32 h-1 ethiopian-accent rounded-full mt-8" />
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
            <Input
              label="Name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              required
            />

            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />

            <Input
              label="Subject (Optional)"
              name="subject"
              type="text"
              placeholder="What is this about?"
              value={formData.subject}
              onChange={handleChange}
            />

            <Textarea
              label="Message"
              name="message"
              placeholder="Tell me about your project or inquiry..."
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              rows={6}
              required
            />

            <Button
              type="submit"
              className="w-full"
              size="lg"
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
                ✓ Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
                ✗ Failed to send message. Please try again or email me directly.
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </Section>
  )
}
