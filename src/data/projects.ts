import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Geometrical and Asphalt Pavement Design - Chirecha to Ganami Road',
    description: 'Final year project focusing on comprehensive road design including geometric layout and asphalt pavement structure.',
    longDescription: 'This capstone project involved the complete design of a road connecting Chirecha to Ganami, incorporating geometric design principles, traffic analysis, and asphalt pavement design. The project utilized AutoCAD Civil 3D for 3D modeling and optimization techniques for cost-effective design solutions.',
    image: '/images/projects/road-design.jpg',
    technologies: ['AutoCAD Civil 3D', 'MX-Road', 'Excel', 'Highway Design'],
    category: 'Academic',
    featured: true,
    completionDate: '2017-06',
  },
  {
    id: '2',
    title: 'Structural & Geotechnical Design - B+G+4 Administrative Building',
    description: 'Integrated design project for a 5-story administrative building at Debre Markos University.',
    longDescription: 'A comprehensive semester project involving both structural and geotechnical design for a Basement + Ground + 4 floors administrative office building. The project included foundation design, structural analysis using ETABS, and detailed construction drawings.',
    image: '/images/projects/admin-building.jpg',
    technologies: ['ETABS', 'SAP 2000', 'SAFE', 'AutoCAD', 'Geotechnical Analysis'],
    category: 'Academic',
    featured: true,
    completionDate: '2017-03',
  },
  {
    id: '3',
    title: 'High-Rise Commercial Building Design',
    description: 'Structural design and analysis of multi-story commercial buildings.',
    longDescription: 'Professional structural engineering work involving the design of high-rise commercial buildings. Responsibilities included structural analysis, member sizing, foundation design, and preparation of construction documents. Used advanced software for seismic analysis and wind load calculations.',
    image: '/images/projects/high-rise.jpg',
    technologies: ['ETABS', 'SAP 2000', 'SAFE', 'Revit Structure', 'AutoCAD'],
    category: 'Professional',
    featured: true,
    completionDate: '2021-08',
  },
  {
    id: '4',
    title: 'Residential Building Design Portfolio',
    description: 'Multiple residential building projects including villas and apartment complexes.',
    longDescription: 'A collection of residential structural design projects completed during tenure at Eagle Consulting. Projects ranged from individual villas to multi-unit apartment complexes, each requiring unique structural solutions based on architectural requirements and site conditions.',
    image: '/images/projects/residential.jpg',
    technologies: ['ETABS', 'SAFE', 'AutoCAD', 'Excel'],
    category: 'Professional',
    featured: false,
    completionDate: '2021-07',
  },
  {
    id: '5',
    title: 'Engineering Software Training Curriculum Development',
    description: 'Comprehensive training materials for structural engineering software.',
    longDescription: 'Developed extensive training manuals and curriculum for teaching structural engineering software including ETABS, SAP 2000, SAFE, ArchiCAD, and Revit Structure. Materials include step-by-step tutorials, practice exercises, and real-world case studies for high-rise building analysis and design.',
    image: '/images/projects/training.jpg',
    technologies: ['ETABS', 'SAP 2000', 'SAFE', 'ArchiCAD', 'Revit', 'MS Office'],
    category: 'Professional',
    featured: true,
    completionDate: '2023-09',
  },
]

// Project categories for filtering
export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'professional', label: 'Professional' },
  { id: 'academic', label: 'Academic' },
  { id: 'personal', label: 'Personal' },
]
