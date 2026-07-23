'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Section, { SectionHeader } from '@/components/ui/Section'
import { skillsData, proficiencyLevels, designCodes } from '@/data/skills'
import Badge from '@/components/ui/Badge'

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const getProficiencyWidth = (level: string) => {
    const widths: Record<string, string> = {
      'B2': '65%',
      'C1': '85%',
      'C2': '100%',
    }
    return widths[level] || '0%'
  }

  const getProficiencyColor = (level: string) => {
    const colors: Record<string, string> = {
      'B2': 'from-orange-400 to-orange-500',
      'C1': 'from-blue-400 to-blue-600',
      'C2': 'from-green-500 to-green-600',
    }
    return colors[level] || 'from-gray-400 to-gray-500'
  }

  const displayedCategories = selectedCategory
    ? skillsData.filter(cat => cat.category === selectedCategory)
    : skillsData

  return (
    <Section id="skills" background="gray">
      <SectionHeader
        subtitle="Technical Expertise"
        title="Skills & Software Proficiency"
        description="Specialized in structural analysis, BIM modeling, and code-compliant design across international standards"
      />

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 sm:px-6 py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 active:scale-95 min-h-[44px] ${
            selectedCategory === null
              ? 'bg-primary-600 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          All Skills
        </button>
        {skillsData.map((category) => (
          <button
            key={category.category}
            onClick={() => setSelectedCategory(category.category)}
            className={`px-4 sm:px-6 py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 active:scale-95 min-h-[44px] ${
              selectedCategory === category.category
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {category.category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="space-y-8 sm:space-y-12">
        {displayedCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
              <span className="w-1.5 sm:w-2 h-6 sm:h-8 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full mr-2 sm:mr-3" />
              {category.category}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{skill.icon}</span>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 group-hover:text-primary-600 transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-gray-500">{skill.proficiency}</p>
                      </div>
                    </div>
                    <Badge variant="primary" size="sm">
                      {skill.level}
                    </Badge>
                  </div>

                  {/* Progress Bar */}
                  <div className="skill-bar">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: getProficiencyWidth(skill.level) }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className={`h-full bg-gradient-to-r ${getProficiencyColor(skill.level)} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Proficiency Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        {Object.entries(proficiencyLevels).map(([level, description]) => (
          <div key={level} className="flex items-center gap-2 text-sm text-gray-600">
            <Badge variant="primary" size="sm">{level}</Badge>
            <span>{description}</span>
          </div>
        ))}
      </motion.div>

      {/* Design Codes & Standards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 sm:mt-16 bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
      >
        <h4 className="font-bold text-lg sm:text-xl text-gray-900 mb-2 text-center">
          Design Codes & Standards
        </h4>
        <p className="text-sm text-gray-500 text-center mb-8">
          All structural designs are produced in compliance with internationally recognised codes
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto">
          {designCodes.map((code) => (
            <div
              key={code.id}
              className="flex flex-col items-center text-center p-4 rounded-xl bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-accent-500 rounded-xl flex items-center justify-center mb-3 shadow-md">
                <span className="text-white font-bold text-xs sm:text-sm tracking-tight">
                  {code.icon}
                </span>
              </div>
              <p className="font-bold text-gray-900 text-sm">{code.label}</p>
              <p className="text-xs text-gray-500 mt-1">{code.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
