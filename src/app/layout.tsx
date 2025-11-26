import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yibeltal Ebabu Dires | Structural Engineer & Software Trainer',
  description: 'Professional portfolio of Yibeltal Ebabu Dires - Structural Engineer and Engineering Software Trainer specializing in high-rise building design, ETABS, SAP2000, and advanced engineering software.',
  icons: {
    icon: 'https://res.cloudinary.com/dbn8jx8bh/image/upload/w_32,h_32,c_fill,g_face,r_max/v1764151979/yb2_qyry3u.png',
    apple: 'https://res.cloudinary.com/dbn8jx8bh/image/upload/w_180,h_180,c_fill,g_face,r_max/v1764151979/yb2_qyry3u.png',
  },
  keywords: [
    'Structural Engineer',
    'Civil Engineer',
    'ETABS Expert',
    'SAP2000',
    'Engineering Software Trainer',
    'Ethiopia',
    'Addis Ababa',
    'High-Rise Design',
    'AutoCAD',
    'Revit',
  ],
  authors: [{ name: 'Yibeltal Ebabu Dires' }],
  creator: 'Yibeltal Ebabu Dires',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yibeltal-portfolio.vercel.app',
    siteName: 'Yibeltal Ebabu Dires Portfolio',
    title: 'Yibeltal Ebabu Dires | Structural Engineer & Software Trainer',
    description: 'Professional portfolio showcasing expertise in structural engineering and engineering software training.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Yibeltal Ebabu Dires Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yibeltal Ebabu Dires | Structural Engineer & Software Trainer',
    description: 'Professional portfolio showcasing expertise in structural engineering and engineering software training.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
