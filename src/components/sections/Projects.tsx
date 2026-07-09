'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Section, { SectionHeader } from '@/components/ui/Section'
import { projects, projectCategories } from '@/data/projects'
import { Project } from '@/types'
import Badge from '@/components/ui/Badge'
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import { HiCalendar, HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import Image from 'next/image'

// ─── Project Detail Modal ────────────────────────────────────────────────────
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const gallery = project.images && project.images.length > 1 ? project.images : null
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (gallery) {
        if (e.key === 'ArrowRight') setActiveImg(i => (i + 1) % gallery.length)
        if (e.key === 'ArrowLeft') setActiveImg(i => (i - 1 + gallery.length) % gallery.length)
      }
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = 'unset'
    }
  }, [onClose, gallery])

  const currentImage = gallery ? gallery[activeImg] : project.image

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image / Gallery */}
        <div className="relative h-56 sm:h-72 rounded-t-2xl overflow-hidden bg-gray-900">
          <Image
            src={currentImage}
            alt={project.title}
            fill
            unoptimized
            className="object-cover transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 w-9 h-9 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors z-10"
          >
            <HiX className="w-5 h-5" />
          </button>

          {/* Gallery navigation */}
          {gallery && gallery.length > 1 && (
            <>
              <button
                onClick={() => setActiveImg(i => (i - 1 + gallery.length) % gallery.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Previous image"
              >
                <HiChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveImg(i => (i + 1) % gallery.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Next image"
              >
                <HiChevronRight className="w-5 h-5" />
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === activeImg ? 'bg-white w-4' : 'bg-white/50'
                    }`}
                    aria-label={`Image ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Badges */}
          <div className="absolute bottom-4 left-4 flex gap-2">
            {!(gallery && gallery.length > 1) && (
              <>
                <Badge variant="secondary" size="sm">{project.category}</Badge>
                {project.featured && <Badge variant="warning" size="sm">Featured</Badge>}
              </>
            )}
          </div>
        </div>

        {/* Thumbnail strip for gallery */}
        {gallery && gallery.length > 1 && (
          <div className="flex gap-2 px-6 pt-4">
            {gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                  i === activeImg ? 'border-primary-500 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <Image src={img} alt={`View ${i + 1}`} fill unoptimized className="object-cover" />
              </button>
            ))}
            <div className="flex items-center gap-2 ml-auto">
              <Badge variant="secondary" size="sm">{project.category}</Badge>
              {project.featured && <Badge variant="warning" size="sm">Featured</Badge>}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
            <div className="flex items-center text-sm text-gray-500">
              <HiCalendar className="w-4 h-4 mr-1" />
              {new Date(project.completionDate).toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
              })}
            </div>
          </div>

          <div className="w-24 h-1 ethiopian-accent rounded-full mb-6" />

          <p className="text-gray-700 leading-relaxed mb-6">{project.longDescription}</p>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="primary" size="sm">{tech}</Badge>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// ─── Main Projects Section ───────────────────────────────────────────────────
export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category.toLowerCase() === selectedCategory)

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <Section id="projects" background="gradient">
      <SectionHeader
        subtitle="My Work"
        title="Projects & Portfolio"
        description="A showcase of academic and professional projects demonstrating expertise in structural engineering"
      />

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {projectCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-primary-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 hover:scale-105'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card hover className="h-full flex flex-col group">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-400 to-accent-500 rounded-t-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <Badge variant="warning" size="sm">Featured</Badge>
                  </div>
                )}
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" size="sm">{project.category}</Badge>
                </div>
              </div>

              <CardContent className="flex-1 flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="primary" size="sm">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" size="sm">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center text-sm text-gray-500 mt-auto">
                  <HiCalendar className="w-4 h-4 mr-1" />
                  {new Date(project.completionDate).toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </div>
              </CardContent>

              <CardFooter>
                <button
                  onClick={() => setActiveProject(project)}
                  className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  View Details
                </button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Featured Projects Highlight */}
      {selectedCategory === 'all' && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Featured Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredProjects.slice(0, 2).map((project) => (
                <div
                  key={project.id}
                  className="p-6 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl"
                >
                  <h4 className="font-bold text-xl text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-gray-600 mb-4">{project.longDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="primary" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Project Detail Modal */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </Section>
  )
}
