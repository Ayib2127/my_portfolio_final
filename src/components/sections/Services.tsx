'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Section, { SectionHeader } from '@/components/ui/Section'
import { HiOutlineOfficeBuilding, HiOutlineDesktopComputer, HiOutlineClipboardCheck, HiGlobe, HiClock, HiLightningBolt } from 'react-icons/hi'

const services = [
  {
    id: 'structural-design',
    icon: HiOutlineOfficeBuilding,
    title: 'Structural Design & Analysis',
    tagline: 'Remote-ready structural engineering for residential and commercial projects',
    deliverables: [
      'RC & steel structure analysis and design (G+1 to G+10+)',
      'Foundation, slab, beam, column & shear wall design',
      'Seismic and wind load analysis',
      'Structural drawings, framing plans & reinforcement detailing',
      'BOQ preparation and cost estimation',
      'Code compliance: EBCS · Eurocode · ACI 318',
    ],
    tools: ['ETABS', 'SAP2000', 'SAFE', 'AutoCAD'],
    cta: 'Get a Quote',
    accent: 'from-primary-500 to-primary-700',
    badge: 'Remote Available',
  },
  {
    id: 'software-training',
    icon: HiOutlineDesktopComputer,
    title: 'Engineering Software Training',
    tagline: 'One-on-one and group training, online or in-person',
    deliverables: [
      'ETABS, SAP2000, SAFE — beginner to advanced',
      'Revit Structure & ArchiCAD — BIM modeling',
      'AutoCAD — structural drafting & detailing',
      'Custom training manuals included',
      'Practical exercises with real project case studies',
      'Post-training support & Q&A sessions',
    ],
    tools: ['Zoom', 'MS Teams', 'Google Meet'],
    cta: 'Book a Session',
    accent: 'from-accent-400 to-accent-600',
    badge: 'Online & In-Person',
  },
  {
    id: 'consulting',
    icon: HiOutlineClipboardCheck,
    title: 'Consulting & Design Review',
    tagline: 'Expert review, optimization and technical consultation',
    deliverables: [
      'Structural design peer review & error checking',
      'Code compliance audit (EBCS, Eurocode, ACI 318)',
      'Material optimization to reduce construction cost',
      'ETABS / SAP2000 / SAFE modeling consultation',
      'Technical report writing',
      'BOQ review and cost estimation',
    ],
    tools: ['ETABS', 'SAP2000', 'SAFE'],
    cta: 'Request Consultation',
    accent: 'from-green-500 to-green-700',
    badge: 'Remote Available',
  },
]

const trustSignals = [
  { icon: HiGlobe, text: 'Available for remote projects worldwide' },
  { icon: HiClock, text: 'UTC+3 · Response within 24 hrs' },
  { icon: HiLightningBolt, text: 'Contact for pricing' },
]

export default function Services() {
  return (
    <Section id="services" background="white">
      <SectionHeader
        subtitle="What I Offer"
        title="Professional Services"
        description="Delivering code-compliant structural engineering and world-class software training to clients across Ethiopia and internationally"
      />

      {/* Service Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden group"
            >
              {/* Top accent bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${service.accent}`} />

              <div className="p-6 sm:p-8 flex flex-col flex-1">
                {/* Icon + Badge */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.accent} flex items-center justify-center shadow-md`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-primary-600 bg-primary-50 border border-primary-200 px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                  {service.tagline}
                </p>

                {/* Deliverables */}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <span className="text-primary-500 mr-2 mt-0.5 flex-shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tools */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Delivered via
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`w-full text-center py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${service.accent} hover:opacity-90 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95`}
                >
                  {service.cta} →
                </a>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Trust Signal Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-5 sm:p-6 border border-primary-100"
      >
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
          {trustSignals.map((signal, i) => {
            const Icon = signal.icon
            return (
              <div key={i} className="flex items-center gap-2.5 text-gray-700">
                <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-primary-600" />
                </div>
                <span className="text-sm font-medium">{signal.text}</span>
              </div>
            )
          })}
        </div>
      </motion.div>
    </Section>
  )
}
