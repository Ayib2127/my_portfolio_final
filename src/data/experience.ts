import { WorkExperience, Education } from '@/types'

export const workExperience: WorkExperience[] = [
  {
    id: '1',
    title: 'Structural Design Engineer',
    company: 'Emarosh Engineering PLC',
    companyUrl: 'https://e.emarosh.com/',
    location: 'Addis Ababa, Ethiopia',
    startDate: '2026-01',
    endDate: 'Present',
    description: 'Delivering structural analysis, design, and documentation for high-rise reinforced concrete buildings in compliance with ES EN 2015 Standards and Eurocodes.',
    responsibilities: [
      'Designed and analyzed high-rise reinforced concrete buildings (up to 3B|G|16|Terrace) using ETABS and designed foundation systems using SAFE',
      'Prepared structural drafting, design reports, and technical documentation',
      'Updated structural drawings and as-built documentation based on site modifications',
      'Provided structural engineering support across multiple construction projects and collaborated on complex design reviews with senior management',
      'Coordinated with architects, MEP engineers, and construction teams',
      'Site supervision and structural quality assurance',
      'Ensured structural designs complied with ES EN 2015 and Eurocodes',
    ],
    technologies: ['ETABS', 'SAFE', 'SAP2000', 'AutoCAD', 'Revit Structure'],
  },
  {
    id: '2',
    title: 'Senior Structural Software Lead & Trainer',
    company: 'Eagle Training Institute',
    location: 'Addis Ababa, Ethiopia',
    startDate: '2021-11',
    endDate: '2023-09',
    description: 'Led structural engineering software training programs for professionals, graduates, and government institutions based on ES EN 2015 standards.',
    responsibilities: [
      'Delivered professional training in ETABS, SAFE, SAP2000, STAAD.Pro, Revit Structure, ArchiCAD, and AutoCAD',
      'Developed structural engineering training manuals based on ES EN 2015',
      'Designed practical engineering workshops for professionals, graduates, and government institutions',
      'Mentored engineers in structural design workflows and BIM applications',
    ],
    technologies: ['ETABS', 'SAFE', 'SAP2000', 'STAAD.Pro', 'Revit Structure', 'ArchiCAD', 'AutoCAD'],
  },
  {
    id: '3',
    title: 'Structural Engineer',
    company: 'Eagle Consulting Architects & Engineers PLC',
    location: 'Addis Ababa, Ethiopia',
    startDate: '2018-08',
    endDate: '2021-09',
    description: 'Executed structural analysis and design for multi-story residential and commercial buildings.',
    responsibilities: [
      'Executed structural analysis and design for multi-story buildings using ETABS, SAP2000, and SAFE',
      'Developed structural framing plans, Bill of Quantities (BOQ), and cost estimations',
      'Conducted site supervision to ensure design-to-site compliance',
      'Coordinated with architects and MEP engineers on construction projects',
    ],
    technologies: ['ETABS', 'SAP2000', 'SAFE', 'AutoCAD'],
  },
]

export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Science (BSc)',
    field: 'Civil Engineering',
    institution: 'Debre Markos University',
    location: 'Debre Markos, Ethiopia',
    startDate: '2013',
    endDate: '2018',
    gpa: '3.73',
    rank: '2nd in graduating class',
    achievements: [
      'Graduated with CGPA of 3.73 out of 4.0',
      'Ranked 2nd among all Institute of Technology graduates',
      'Semester Project: Integrated Structural and Geotechnical Design of B+G+4 Administrative Offices',
      'Strong foundation in structural analysis, mechanics of materials, and geotechnical engineering',
    ],
  },
]
