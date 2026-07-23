import { Testimonial } from '@/types'

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Eng. Bekalu Yetechalew',
    title: 'Structural Design Team Leader',
    company: 'Emarosh Engineering PLC',
    message: 'Working alongside Yibeltal at Emarosh Engineering has been a genuine pleasure. He brings a rare combination of technical depth and professional discipline to every project. His ability to handle complex high-rise structural models in ETABS and produce accurate, code-compliant documentation — even under tight project timelines — is exceptional. He is a reliable, detail-oriented engineer who takes full ownership of his work and contributes meaningfully to the team.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Dr. Abebe Tesfahun',
    title: 'Dean of Institute of Technology',
    company: 'Debre Markos University',
    message: 'Mr. Yibeltal is, without question, the most outstanding student of his batch. He is a careful and creative thinker with an eye for details and a devotion to logic. His academic performance and dedication to his studies were exemplary throughout his time at our institution.',
    rating: 5,
    image: 'https://res.cloudinary.com/dbn8jx8bh/image/upload/w_100,h_100,c_fill,g_face,q_auto,f_auto/v1764169842/f34c14ea-aec8-4de4-8fe9-dce7212b6747.png',
  },
  {
    id: '3',
    name: 'Mesenbet Tesfaye',
    title: 'General Manager',
    company: 'Eagle Language, Computer & Engineering Software Training Institute',
    message: 'During his stay, Mr. Yibeltal Ebabu has shown a remarkable potential, diligence and was very cooperative with his colleagues. His dedication to preparing comprehensive training materials and his ability to communicate complex technical concepts in an accessible manner was outstanding.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Mahitot Demelash',
    title: 'General Manager',
    company: 'Smart Computer and Engineering Software Training Center',
    message: 'He has excellent performance, is very supportive and inclusive of students, and always listened thoughtfully to the contributions of his students. His teaching methodology and patience in explaining complex concepts made him a favorite among learners.',
    rating: 5,
  },
]

// Professional Reference
export const reference = {
  name: 'Eng. Bekalu Yetechalew',
  title: 'Structural Design Team Leader',
  company: 'Emarosh Engineering PLC',
  phone: '+251 935 474 722',
  email: 'yetechalew55@gmail.com',
}

export const achievements = [
  {
    id: '1',
    number: '7+',
    label: 'Years Experience',
    description: 'In structural engineering, design, and software training',
  },
  {
    id: '2',
    number: '200+',
    label: 'Engineers Trained',
    description: 'Students and professionals trained in ETABS, SAP2000, SAFE & BIM',
  },
  {
    id: '3',
    number: '50+',
    label: 'Projects Delivered',
    description: 'Structural design and analysis projects across Ethiopia',
  },
  {
    id: '4',
    number: '3',
    label: 'Design Codes',
    description: 'ES EN 2015 · Eurocodes · ACI 318',
  },
]
