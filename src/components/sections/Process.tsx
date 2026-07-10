'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Section, { SectionHeader } from '@/components/ui/Section'
import {
  HiOutlineChatAlt2,
  HiOutlineClipboardList,
  HiOutlineCog,
  HiOutlineCheckCircle,
} from 'react-icons/hi'

const steps = [
  {
    number: '01',
    icon: HiOutlineChatAlt2,
    title: 'Consult',
    subtitle: 'Discovery & Scoping',
    description:
      'We start with a free consultation to understand your project requirements, structural challenges, and goals. I review your architectural plans, site conditions, and applicable design codes to define the scope clearly.',
    details: ['Project brief review', 'Code & standard selection', 'Scope & timeline agreement'],
    color: 'from-blue-500 to-blue-600',
    lightColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600',
  },
  {
    number: '02',
    icon: HiOutlineClipboardList,
    title: 'Analyze',
    subtitle: 'Structural Modelling',
    description:
      'I build a precise 3D structural model using ETABS, SAP2000, or SAFE — depending on the structure type. All loads, load combinations, seismic parameters, and material properties are applied in compliance with your specified design code.',
    details: ['3D structural modelling', 'Load & seismic analysis', 'Code-compliant combinations'],
    color: 'from-primary-500 to-primary-600',
    lightColor: 'bg-primary-50',
    borderColor: 'border-primary-200',
    textColor: 'text-primary-600',
  },
  {
    number: '03',
    icon: HiOutlineCog,
    title: 'Design',
    subtitle: 'Engineering & Documentation',
    description:
      'Based on the analysis results, I design all structural members — foundations, columns, beams, slabs, and shear walls — optimised for safety and economy. Full construction drawings, reinforcement detailing, and BOQ are prepared in AutoCAD.',
    details: ['Member sizing & detailing', 'Construction drawings', 'BOQ & cost estimation'],
    color: 'from-accent-400 to-accent-600',
    lightColor: 'bg-accent-50',
    borderColor: 'border-accent-200',
    textColor: 'text-accent-600',
  },
  {
    number: '04',
    icon: HiOutlineCheckCircle,
    title: 'Deliver',
    subtitle: 'Review & Handover',
    description:
      'All deliverables are reviewed for completeness and accuracy before handover. I provide a structured package of design reports, calculation sheets, drawings, and ongoing support during construction if needed.',
    details: ['Quality review & sign-off', 'Structured file handover', 'Post-delivery support'],
    color: 'from-green-500 to-green-600',
    lightColor: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-600',
  },
]

export default function Process() {
  return (
    <Section id="process" background="gray">
      <SectionHeader
        subtitle="How I Work"
        title="My Engagement Process"
        description="A transparent, structured approach that keeps you informed and in control from first brief to final delivery"
      />

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line between steps (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0 -translate-y-1/2" />
              )}

              <div className={`relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border ${step.borderColor} z-10`}>
                {/* Step number */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-4xl font-black ${step.textColor} opacity-20 leading-none`}>
                    {step.number}
                  </span>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-0.5">{step.title}</h3>
                <p className={`text-sm font-semibold ${step.textColor} mb-3`}>{step.subtitle}</p>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Detail bullets */}
                <ul className={`space-y-1.5 pt-4 border-t ${step.borderColor}`}>
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-xs text-gray-600">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${step.color} mr-2 flex-shrink-0`} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center bg-white rounded-2xl p-8 shadow-md border border-gray-100"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Ready to start your project?
        </h3>
        <p className="text-gray-500 mb-6 max-w-xl mx-auto">
          The first consultation is free. Share your project details and I&apos;ll get back to you within 24 hours.
        </p>
        <a
          href="#contact"
          className="inline-block bg-gradient-to-r from-primary-600 to-accent-500 text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Start a Conversation →
        </a>
      </motion.div>
    </Section>
  )
}
