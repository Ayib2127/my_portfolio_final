'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Section, { SectionHeader } from '@/components/ui/Section'
import { projects, projectCategories } from '@/data/projects'
import Badge from '@/components/ui/Badge'
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import { HiCalendar, HiEye } from 'react-icons/hi'
import Image from 'next/image'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category.toLowerCase() === selectedCategory)

  const featuredProjects = projects.filter(project => project.featured)

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card hover className="h-full flex flex-col">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-400 to-accent-500 rounded-t-xl overflow-hidden">
                {/* Placeholder - Replace with actual images */}
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <HiEye className="w-16 h-16 mx-auto mb-2 opacity-50" />
                    <p className="text-sm opacity-75">Project Image</p>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <Badge variant="warning" size="sm">
                      Featured
                    </Badge>
                  </div>
                )}
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" size="sm">
                    {project.category}
                  </Badge>
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
                    year: 'numeric' 
                  })}
                </div>
              </CardContent>

              <CardFooter>
                <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
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
                <div key={project.id} className="p-6 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl">
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
    </Section>
  )
}
