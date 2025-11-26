// Personal Information Types
export interface PersonalInfo {
  name: string
  title: string
  subtitle: string
  location: string
  email: string
  phone: string
  telegram?: string
  bio: string
  languages: Language[]
  social: SocialLinks
}

export interface Language {
  name: string
  proficiency: string
}

export interface SocialLinks {
  linkedin?: string
  github?: string
  twitter?: string
  facebook?: string
}

// Work Experience Types
export interface WorkExperience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string | 'Present'
  description: string
  responsibilities: string[]
  technologies?: string[]
}

// Education Types
export interface Education {
  id: string
  degree: string
  field: string
  institution: string
  location: string
  startDate: string
  endDate: string
  gpa?: string
  rank?: string
  achievements?: string[]
}

// Skills Types
export interface SkillCategory {
  category: string
  skills: Skill[]
}

export interface Skill {
  name: string
  proficiency: 'Beginner' | 'Intermediate' | 'Proficient' | 'Expert'
  level: 'B1' | 'B2' | 'C1' | 'C2'
  icon?: string
}

// Project Types
export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  technologies: string[]
  category: 'Academic' | 'Professional' | 'Personal'
  featured: boolean
  projectUrl?: string
  githubUrl?: string
  completionDate: string
}

// Testimonial Types
export interface Testimonial {
  id: string
  name: string
  title: string
  company: string
  message: string
  image?: string
  rating?: number
}

// Contact Form Types
export interface ContactFormData {
  name: string
  email: string
  subject?: string
  message: string
}

export interface ContactMessage extends ContactFormData {
  id: string
  created_at: string
}

// Certificate Types
export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  credentialId?: string
  credentialUrl?: string
  image?: string
}

// Navigation Types
export interface NavItem {
  label: string
  href: string
  icon?: string
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}
