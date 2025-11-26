import { NavItem } from '@/types'

export const navigationItems: NavItem[] = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
]

export const footerLinks = {
  quickLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  services: [
    { label: 'Structural Design', href: '#skills' },
    { label: 'Software Training', href: '#experience' },
    { label: 'Consultation', href: '#contact' },
    { label: 'Technical Support', href: '#projects' },
  ],
  resources: [
    { label: 'Download CV', href: '/cv/Yibeltal_Ebabu_CV.pdf' },
    { label: 'LinkedIn', href: '#' },
    { label: 'GitHub', href: '#' },
  ],
}
