import { SkillCategory } from '@/types'

export const skillsData: SkillCategory[] = [
  {
    category: 'Structural Design & Analysis',
    skills: [
      {
        name: 'ETABS',
        proficiency: 'Expert',
        level: 'C2',
        icon: '🏗️',
      },
      {
        name: 'SAP2000',
        proficiency: 'Expert',
        level: 'C2',
        icon: '🔧',
      },
      {
        name: 'SAFE',
        proficiency: 'Expert',
        level: 'C2',
        icon: '📐',
      },
      {
        name: 'STAAD.Pro',
        proficiency: 'Intermediate',
        level: 'B2',
        icon: '⚙️',
      },
    ],
  },
  {
    category: 'BIM & Drafting',
    skills: [
      {
        name: 'Revit Structure',
        proficiency: 'Proficient',
        level: 'C1',
        icon: '🏢',
      },
      {
        name: 'ArchiCAD',
        proficiency: 'Proficient',
        level: 'C1',
        icon: '🏛️',
      },
      {
        name: 'AutoCAD',
        proficiency: 'Proficient',
        level: 'C1',
        icon: '✏️',
      },
    ],
  },
  {
    category: 'Project Management',
    skills: [
      {
        name: 'MS Project',
        proficiency: 'Expert',
        level: 'C2',
        icon: '📊',
      },
      {
        name: 'Primavera P6',
        proficiency: 'Proficient',
        level: 'C1',
        icon: '📈',
      },
    ],
  },
]

// Design codes — shown as trust badges at the bottom of Skills section
export const designCodes = [
  {
    id: 'esen',
    label: 'ES EN 2015',
    description: 'Ethiopian Standard',
    icon: 'EN',
  },
  {
    id: 'eurocode',
    label: 'Eurocodes',
    description: 'EN 1990 – EN 1998',
    icon: 'EU',
  },
  {
    id: 'aci',
    label: 'ACI 318',
    description: 'Building Code',
    icon: 'ACI',
  },
]

// Proficiency level descriptions
export const proficiencyLevels = {
  'B2': 'Intermediate — handles moderate complexity',
  'C1': 'Proficient — works independently on complex tasks',
  'C2': 'Expert — full mastery, able to train others',
}
