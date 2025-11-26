import { SkillCategory } from '@/types'

export const skillsData: SkillCategory[] = [
  {
    category: 'Structural & Engineering Analysis',
    skills: [
      {
        name: 'ETABS',
        proficiency: 'Expert',
        level: 'C2',
        icon: '🏗️',
      },
      {
        name: 'SAP 2000',
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
        name: 'Staad Pro',
        proficiency: 'Intermediate',
        level: 'B2',
        icon: '⚙️',
      },
    ],
  },
  {
    category: 'Architectural & Drafting',
    skills: [
      {
        name: 'AutoCAD',
        proficiency: 'Proficient',
        level: 'C1',
        icon: '✏️',
      },
      {
        name: 'ArchiCAD',
        proficiency: 'Proficient',
        level: 'C1',
        icon: '🏛️',
      },
      {
        name: 'Revit Structure',
        proficiency: 'Intermediate',
        level: 'B2',
        icon: '🏢',
      },
      {
        name: 'AutoCAD Civil 3D',
        proficiency: 'Proficient',
        level: 'C1',
        icon: '🛣️',
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
  {
    category: 'Highway & Road Design',
    skills: [
      {
        name: 'MX-Road',
        proficiency: 'Expert',
        level: 'C2',
        icon: '🛤️',
      },
      {
        name: 'Eagle Point',
        proficiency: 'Proficient',
        level: 'C1',
        icon: '🦅',
      },
      {
        name: 'InRoads',
        proficiency: 'Intermediate',
        level: 'B1',
        icon: '🚧',
      },
    ],
  },
  {
    category: 'General Software & Tools',
    skills: [
      {
        name: 'Microsoft Office Suite',
        proficiency: 'Expert',
        level: 'C2',
        icon: '💼',
      },
      {
        name: 'Excel (Advanced)',
        proficiency: 'Expert',
        level: 'C2',
        icon: '📊',
      },
      {
        name: 'PowerPoint',
        proficiency: 'Proficient',
        level: 'C1',
        icon: '📽️',
      },
    ],
  },
]

// Proficiency level descriptions
export const proficiencyLevels = {
  'B1': 'Basic understanding and can perform simple tasks',
  'B2': 'Intermediate skills with ability to handle moderate complexity',
  'C1': 'Proficient with ability to handle complex tasks independently',
  'C2': 'Expert level with mastery and ability to train others',
}
