'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Section, { SectionHeader } from '@/components/ui/Section'
import { personalInfo } from '@/data/personal'
import { education } from '@/data/experience'
import { achievements } from '@/data/testimonials'
import { HiAcademicCap, HiLocationMarker, HiMail, HiPhone, HiGlobe, HiBadgeCheck } from 'react-icons/hi'

export default function About() {
  const educationData = education[0]

  return (
    <Section id="about" background="white">
      <SectionHeader
        subtitle="Get to Know Me"
        title="About Me"
        description="Structural Engineer and BIM Specialist with 7+ years of experience in design, analysis, and technical training"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Professional Profile</h3>
          <div className="prose prose-lg text-gray-600 space-y-4">
            {personalInfo.bio.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-8 space-y-3">
            <div className="flex items-center space-x-3 text-gray-700">
              <HiLocationMarker className="w-5 h-5 text-primary-600 flex-shrink-0" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <HiMail className="w-5 h-5 text-primary-600 flex-shrink-0" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-primary-600 transition-colors">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <HiPhone className="w-5 h-5 text-primary-600 flex-shrink-0" />
              <a href={`tel:${personalInfo.phone}`} className="hover:text-primary-600 transition-colors">
                {personalInfo.phone}
              </a>
            </div>
            {personalInfo.website && (
              <div className="flex items-center space-x-3 text-gray-700">
                <HiGlobe className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors">
                  {personalInfo.website.replace('https://', '')}
                </a>
              </div>
            )}
            {personalInfo.membership && (
              <div className="flex items-center space-x-3 text-gray-700">
                <HiBadgeCheck className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span className="font-medium">{personalInfo.membership}</span>
              </div>
            )}
          </div>

          {/* Languages */}
          <div className="mt-6 sm:mt-8">
            <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Languages</h4>
            <div className="flex flex-wrap gap-2">
              {personalInfo.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg border border-primary-200"
                >
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-sm ml-2">({lang.proficiency})</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education & Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Education Card */}
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <HiAcademicCap className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl text-gray-900 mb-1">
                  {educationData.degree}
                </h4>
                <p className="text-primary-700 font-semibold mb-2">{educationData.field}</p>
                <p className="text-gray-700 mb-1">{educationData.institution}</p>
                <p className="text-sm text-gray-600 mb-3">
                  {educationData.startDate} - {educationData.endDate}
                </p>
                <div className="flex flex-wrap gap-3 mb-3">
                  <div className="px-3 py-1 bg-white rounded-lg shadow-sm">
                    <span className="text-sm font-semibold text-gray-900">CGPA: {educationData.gpa}</span>
                  </div>
                  <div className="px-3 py-1 bg-white rounded-lg shadow-sm">
                    <span className="text-sm font-semibold text-primary-700">Rank: {educationData.rank}</span>
                  </div>
                </div>
                {educationData.achievements && (
                  <ul className="text-sm text-gray-600 space-y-1 mt-3">
                    {educationData.achievements.slice(0, 3).map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Achievements Stats */}
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-4xl font-bold gradient-text mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  {achievement.label}
                </div>
                <div className="text-xs text-gray-600">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
