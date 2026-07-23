'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import Section, { SectionHeader } from '@/components/ui/Section'
import { projects, projectCategories } from '@/data/projects'
import { Project } from '@/types'
import Badge from '@/components/ui/Badge'
import { HiCalendar, HiX, HiChevronLeft, HiChevronRight, HiPhotograph, HiOutlineArrowRight } from 'react-icons/hi'
import Image from 'next/image'

// ─── Project Detail Modal ─────────────────────────────────────────────────────
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const gallery = useMemo(
    () => project.images && project.images.length > 0 ? project.images : [project.image],
    [project.images, project.image]
  )
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setActiveImg(i => (i + 1) % gallery.length)
      if (e.key === 'ArrowLeft') setActiveImg(i => (i - 1 + gallery.length) % gallery.length)
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = 'unset'
    }
  }, [onClose, gallery])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[92vh] overflow-y-auto z-10 flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* ── Image Gallery ── */}
        <div className="relative h-64 sm:h-80 rounded-t-3xl overflow-hidden bg-gray-900 flex-shrink-0">
          <Image
            src={gallery[activeImg]}
            alt={`${project.title} — image ${activeImg + 1}`}
            fill
            unoptimized
            className="object-cover transition-opacity duration-300"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-11 h-11 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all z-20"
          >
            <HiX className="w-5 h-5" />
          </button>

          {/* Prev / Next */}
          {gallery.length > 1 && (
            <>
              <button
                onClick={() => setActiveImg(i => (i - 1 + gallery.length) % gallery.length)}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all"
              >
                <HiChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveImg(i => (i + 1) % gallery.length)}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all"
              >
                <HiChevronRight className="w-5 h-5" />
              </button>

              {/* Image counter */}
              <div className="absolute top-4 left-4 bg-black/50 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                <HiPhotograph className="w-3.5 h-3.5" />
                {activeImg + 1} / {gallery.length}
              </div>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    aria-label={`Image ${i + 1}`}
                    className={`p-2 rounded-full transition-all duration-300`}
                  >
                    <span className={`block rounded-full transition-all duration-300 ${
                      i === activeImg ? 'w-4 h-2 bg-white' : 'w-2 h-2 bg-white/50'
                    }`} />
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Category + Featured badges at bottom-left */}
          <div className="absolute bottom-4 left-4 flex gap-2">
            <span className="text-xs font-semibold bg-white/20 backdrop-blur-sm text-white border border-white/30 px-3 py-1 rounded-full">
              {project.category}
            </span>
            {project.featured && (
              <span className="text-xs font-semibold bg-accent-400/90 text-gray-900 px-3 py-1 rounded-full">
                Featured
              </span>
            )}
          </div>
        </div>

        {/* ── Thumbnail strip ── */}
        {gallery.length > 1 && (
          <div className="flex gap-2 px-5 pt-4 overflow-x-auto scrollbar-hide flex-shrink-0">
            {gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`relative w-16 h-12 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-200 ${
                  i === activeImg
                    ? 'ring-2 ring-primary-500 ring-offset-1 opacity-100'
                    : 'opacity-50 hover:opacity-80'
                }`}
              >
                <Image src={img} alt={`Thumbnail ${i + 1}`} fill unoptimized className="object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* ── Content ── */}
        <div className="p-6 sm:p-8 flex-1">
          {/* Title & date */}
          <div className="mb-5">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-2">
              {project.title}
            </h3>
            <div className="flex items-center text-sm text-gray-400 gap-1.5">
              <HiCalendar className="w-4 h-4" />
              <span>
                Completed{' '}
                {new Date(project.completionDate).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </div>
          </div>

          {/* Accent */}
          <div className="w-16 h-1 ethiopian-accent rounded-full mb-6" />

          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-[15px] mb-8">
            {project.longDescription}
          </p>

          {/* Technologies */}
          <div className="bg-gray-50 rounded-2xl p-5">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
              Tools & Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span
                  key={tech}
                  className="text-sm font-medium bg-white text-primary-700 border border-primary-200 px-3 py-1.5 rounded-lg shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
            <p className="text-sm text-gray-400">Interested in a similar project?</p>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all hover:shadow-lg hover:scale-105 active:scale-95"
            >
              Get in Touch <HiOutlineArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const imageCount = project.images?.length ?? 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 border border-gray-100 hover:-translate-y-1 flex flex-col h-full">

        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-gray-200 flex-shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            unoptimized
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Top badges */}
          <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
            <span className="text-xs font-semibold bg-black/40 backdrop-blur-sm text-white px-2.5 py-1 rounded-full">
              {project.category}
            </span>
            {project.featured && (
              <span className="text-xs font-bold bg-accent-400 text-gray-900 px-2.5 py-1 rounded-full shadow">
                ★ Featured
              </span>
            )}
          </div>

          {/* Image count pill */}
          {imageCount > 1 && (
            <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/50 text-white text-xs px-2.5 py-1 rounded-full">
              <HiPhotograph className="w-3.5 h-3.5" />
              {imageCount} photos
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/10 transition-all duration-300 flex items-center justify-center">
            <span className="bg-white text-primary-600 font-semibold text-sm px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
              View Details
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col flex-1">
          {/* Title */}
          <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2 flex-1">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 3).map(tech => (
              <span
                key={tech}
                className="text-xs font-medium bg-primary-50 text-primary-700 px-2.5 py-1 rounded-lg"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs font-medium bg-gray-100 text-gray-500 px-2.5 py-1 rounded-lg">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center text-xs text-gray-400 gap-1">
              <HiCalendar className="w-3.5 h-3.5" />
              {new Date(project.completionDate).toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric',
              })}
            </div>
            <span className="text-xs font-semibold text-primary-600 flex items-center gap-1 group-hover:gap-2 transition-all">
              Details <HiOutlineArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter(p => p.category.toLowerCase() === selectedCategory)

  return (
    <Section id="projects" background="gradient">
      <SectionHeader
        subtitle="My Work"
        title="Projects & Portfolio"
        description="Structural engineering projects delivered across Ethiopia — click any project to explore drawings, models, and design details"
      />

      {/* Filter pills */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
        {projectCategories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 min-h-[44px] ${
              selectedCategory === cat.id
                ? 'bg-primary-600 text-white shadow-lg shadow-primary-200 scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {cat.label}
            <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
              selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
            }`}>
              {cat.id === 'all'
                ? projects.length
                : projects.filter(p => p.category.toLowerCase() === cat.id).length}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onClick={() => setActiveProject(project)}
          />
        ))}
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg font-medium">No projects in this category yet.</p>
        </div>
      )}

      {/* CTA strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12 text-center"
      >
        <p className="text-gray-500 mb-4 text-sm">
          Have a project in mind? Let&apos;s discuss it.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-7 py-3 rounded-xl transition-all hover:shadow-xl hover:scale-105 active:scale-95"
        >
          Start a Project <HiOutlineArrowRight className="w-4 h-4" />
        </a>
      </motion.div>

      {/* Modal */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </Section>
  )
}
