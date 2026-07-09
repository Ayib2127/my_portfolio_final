import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Abuzer Mosque — Structural Design & Documentation',
    description: 'Full structural design, detailing, and construction documentation for the Abuzer Mosque project.',
    longDescription: 'A comprehensive structural engineering project covering the full design lifecycle of the Abuzer Mosque. Work included 3D structural modelling, analysis for gravity and lateral loads, reinforced concrete member design for columns, beams, slabs, and foundations, reinforcement detailing, and preparation of construction drawings — all compliant with ES EN 2015 and Eurocode standards.',
    image: 'https://res.cloudinary.com/dbn8jx8bh/image/upload/w_800,h_480,c_fill,q_auto,f_auto/v1783613186/Artboard_9_iscxfh.jpg',
    images: [
      'https://res.cloudinary.com/dbn8jx8bh/image/upload/w_800,h_480,c_fill,q_auto,f_auto/v1783613186/Artboard_9_iscxfh.jpg',
      'https://res.cloudinary.com/dbn8jx8bh/image/upload/w_800,h_480,c_fill,q_auto,f_auto/v1783613185/Artboard_3_ap8jhl.jpg',
      'https://res.cloudinary.com/dbn8jx8bh/image/upload/w_800,h_480,c_fill,q_auto,f_auto/v1783613187/Artboard_7_xcsgr7.jpg',
      'https://res.cloudinary.com/dbn8jx8bh/image/upload/w_800,h_480,c_fill,q_auto,f_auto/v1783613185/Artboard_6_byosm9.jpg',
    ],
    technologies: ['ETABS', 'SAFE', 'AutoCAD', 'Revit Structure'],
    category: 'Professional',
    featured: true,
    completionDate: '2025-06',
  },
  {
    id: '2',
    title: '3 Blocks B+G+10+T Apartment — Jemo, Addis Ababa',
    description: 'Structural design and documentation for three identical 12-storey RC apartment blocks in Jemo, Addis Ababa.',
    longDescription: 'Full structural engineering scope for three identical Basement + Ground + 10 + Top floor reinforced concrete apartment blocks located in Jemo, Addis Ababa. The project involved 3D structural modelling and analysis for gravity and lateral (seismic) loads, design of all RC members — columns, beams, flat slabs, shear walls, and raft foundations — reinforcement detailing, structural framing plans, and full construction documentation. All design work was carried out in compliance with ES EN 2015 and Eurocode standards.',
    image: 'https://res.cloudinary.com/dbn8jx8bh/image/upload/w_800,h_480,c_fill,q_auto,f_auto/v1783612912/Image_7_qraahe.jpg',
    images: [
      'https://res.cloudinary.com/dbn8jx8bh/image/upload/w_800,h_480,c_fill,q_auto,f_auto/v1783612912/Image_7_qraahe.jpg',
      'https://res.cloudinary.com/dbn8jx8bh/image/upload/w_800,h_480,c_fill,q_auto,f_auto/v1783612905/Image_6_o4knbd.jpg',
      'https://res.cloudinary.com/dbn8jx8bh/image/upload/w_800,h_480,c_fill,q_auto,f_auto/v1783612906/Image_17_hdwzfc.jpg',
      'https://res.cloudinary.com/dbn8jx8bh/image/upload/w_800,h_480,c_fill,q_auto,f_auto/v1783612912/Image_9_mkz7oz.jpg',
      'https://res.cloudinary.com/dbn8jx8bh/image/upload/w_800,h_480,c_fill,q_auto,f_auto/v1783612906/Image_4_dz8tfq.jpg',
    ],
    technologies: ['ETABS', 'SAFE', 'AutoCAD', 'Revit Structure'],
    category: 'Professional',
    featured: true,
    completionDate: '2024-08',
  },
  {
    id: '3',
    title: 'Residential Building Design Portfolio',
    description: 'Multiple residential building projects — villas and apartment complexes — designed and delivered at Eagle Consulting.',
    longDescription: 'A collection of residential structural design projects completed during tenure at Eagle Consulting Architects & Engineers PLC. Projects ranged from individual villas to multi-unit apartment complexes, each requiring unique structural solutions based on architectural requirements, site conditions, and client budgets.',
    image: 'https://res.cloudinary.com/dbn8jx8bh/image/upload/w_800,h_480,c_fill,q_auto,f_auto/v1768052457/at_site_kl5kin.png',
    technologies: ['ETABS', 'SAFE', 'AutoCAD'],
    category: 'Professional',
    featured: false,
    completionDate: '2021-07',
  },
  {
    id: '4',
    title: 'Engineering Software Training Curriculum',
    description: 'Developed comprehensive training manuals and course content for structural engineering software used by 200+ engineers.',
    longDescription: 'Developed extensive training manuals and curriculum for teaching structural engineering software including ETABS, SAP2000, SAFE, ArchiCAD, and Revit Structure at Eagle Language & Engineering Software Training Institute. Materials include step-by-step tutorials, practical exercises, and real-world high-rise building case studies. Over 200 students and professionals trained.',
    image: 'https://res.cloudinary.com/dbn8jx8bh/image/upload/w_800,h_480,c_fill,q_auto,f_auto/v1768052465/3X4_tie_pcnbos.png',
    technologies: ['ETABS', 'SAP2000', 'SAFE', 'ArchiCAD', 'Revit Structure'],
    category: 'Professional',
    featured: true,
    completionDate: '2023-09',
  },
  {
    id: '5',
    title: 'Structural & Geotechnical Design — B+G+4 Administrative Building',
    description: 'Integrated structural and geotechnical design for a 5-story administrative building at Debre Markos University.',
    longDescription: 'A comprehensive semester project involving both structural and geotechnical design for a Basement + Ground + 4 floors administrative office building at Debre Markos University. The project included foundation design, structural analysis using ETABS, and preparation of detailed construction drawings.',
    image: 'https://res.cloudinary.com/dbn8jx8bh/image/upload/w_800,h_480,c_fill,q_auto,f_auto/v1768052457/at_site_kl5kin.png',
    technologies: ['ETABS', 'SAP2000', 'SAFE', 'AutoCAD'],
    category: 'Academic',
    featured: false,
    completionDate: '2017-03',
  },
]

// Project categories for filtering
export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'professional', label: 'Professional' },
  { id: 'academic', label: 'Academic' },
]
