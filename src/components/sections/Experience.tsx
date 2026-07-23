'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Section, { SectionHeader } from '@/components/ui/Section'
import { workExperience } from '@/data/experience'
import Badge from '@/components/ui/Badge'
import { HiOfficeBuilding, HiLocationMarker, HiCalendar } from 'react-icons/hi'

export default function Experience() {
  return (
    <Section id="experience" background="white">
      <SectionHeader
        subtitle="My Journey"
        title="Work Experience"
        description="A comprehensive timeline of my professional career in structural engineering and software training"
      />

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 via-accent-400 to-primary-600 rounded-full" />

        <div className="space-y-12">
          {workExperience.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10" />

              {/* Empty Space for alignment */}
              <div className="hidden md:block w-1/2" />

              {/* Content Card */}
              <div className="w-full md:w-1/2">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 group">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {experience.title}
                      </h3>
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0 ml-3">
                        <HiOfficeBuilding className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <p className="text-lg font-semibold text-primary-700 mb-3">
                      {experience.companyUrl ? (
                        <a
                          href={experience.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary-500 underline underline-offset-2 transition-colors"
                        >
                          {experience.company}
                        </a>
                      ) : (
                        experience.company
                      )}
                    </p>

                    <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <HiLocationMarker className="w-4 h-4 mr-1 text-primary-600" />
                        {experience.location}
                      </div>
                      <div className="flex items-center">
                        <HiCalendar className="w-4 h-4 mr-1 text-primary-600" />
                        {new Date(experience.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} -{' '}
                        {experience.endDate === 'Present' 
                          ? 'Present' 
                          : new Date(experience.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </div>
                    </div>

                    {/* Ethiopian Flag Accent */}
                    <div className="w-20 h-0.5 ethiopian-accent rounded-full mb-4" />
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4">
                    {experience.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <span className="text-primary-600 mr-2 mt-1 flex-shrink-0">▸</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  {experience.technologies && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="primary" size="sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 text-center"
      >
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Looking for a Skilled Structural Engineer or Trainer?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            With over 7 years of experience in structural engineering and software training,
            I&apos;m ready to bring value to your next project or training program.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </a>
        </div>
      </motion.div>
    </Section>
  )
}
