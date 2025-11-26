'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Section, { SectionHeader } from '@/components/ui/Section'
import { testimonials } from '@/data/testimonials'
import { HiStar } from 'react-icons/hi'

export default function Testimonials() {
  return (
    <Section id="testimonials" background="white">
      <SectionHeader
        subtitle="What People Say"
        title="Testimonials & Recommendations"
        description="Feedback from colleagues, supervisors, and academic mentors"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="testimonial-card relative"
          >
            {/* Quote Icon */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-4xl font-serif">&ldquo;</span>
            </div>

            {/* Rating */}
            {testimonial.rating && (
              <div className="flex items-center mb-4 ml-12">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <HiStar key={i} className="w-5 h-5 text-accent-400" />
                ))}
              </div>
            )}

            {/* Message */}
            <p className="text-gray-700 mb-6 leading-relaxed italic">
              &ldquo;{testimonial.message}&rdquo;
            </p>

            {/* Author Info */}
            <div className="flex items-center pt-4 border-t border-gray-200">
              {testimonial.image ? (
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
              ) : (
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
              <div className="ml-4">
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
                <p className="text-sm text-primary-600 font-semibold">{testimonial.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 text-center"
      >
        <div className="inline-block bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-1">
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Want to Work Together?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-primary-600 to-accent-500 text-white px-8 py-3 rounded-lg font-medium hover:shadow-xl transition-all hover:scale-105"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
