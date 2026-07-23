'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { navigationItems } from '@/data/navigation'
import { HiMenu, HiX } from 'react-icons/hi'
import Button from '@/components/ui/Button'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    // Small delay so the menu closes before scrolling
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <>
      {/* ── Top Bar ── */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
          isScrolled || isMobileMenuOpen
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden border-2 border-primary-500 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <Image
                  src="https://res.cloudinary.com/dbn8jx8bh/image/upload/w_40,h_40,c_fill,g_face,q_auto,f_auto/v1768052465/3X4_tie_pcnbos.png"
                  alt="Yibeltal Ebabu"
                  width={40}
                  height={40}
                  unoptimized
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-base sm:text-lg text-gray-900">Yibeltal Ebabu</span>
                <div className="w-16 h-0.5 ethiopian-accent rounded-full" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={cn(
                    'text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group',
                    isScrolled ? 'text-gray-700' : 'text-gray-900'
                  )}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="https://drive.google.com/uc?export=download&id=1O6cD2SdBb6iSqdDWZ3lLF4tBxHIaw4hG"
                download="Yibeltal_Ebabu_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">Download CV</Button>
              </a>
              <a href="#contact">
                <Button size="sm">Contact Me</Button>
              </a>
            </div>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen
                ? <HiX className="w-6 h-6 text-gray-900" />
                : <HiMenu className="w-6 h-6 text-gray-900" />
              }
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Full-Screen Overlay ──
           Rendered as a sibling of <header>, NOT inside it.
           z-[99] keeps it below the header bar (z-[100])
           so the hamburger/X button stays clickable on top. */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[99] bg-white flex flex-col lg:hidden"
          aria-modal="true"
          role="dialog"
        >
          {/* Spacer matching header height so content starts below the bar */}
          <div className="h-16 sm:h-20 flex-shrink-0" />

          {/* Nav links + CTAs — centred vertically in remaining space */}
          <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center px-6 py-8 space-y-2">

            {navigationItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="w-full max-w-xs text-center text-2xl font-bold text-gray-900 hover:text-primary-600 py-3 transition-colors duration-200 active:scale-95"
                style={{ animation: `slideDown 0.25s ease-out ${index * 0.07}s both` }}
              >
                {item.label}
              </a>
            ))}

            {/* Divider */}
            <div className="w-32 h-px bg-gray-200 my-4" />

            {/* CTAs */}
            <div className="w-full max-w-xs space-y-3">
              <a
                href="https://drive.google.com/uc?export=download&id=1O6cD2SdBb6iSqdDWZ3lLF4tBxHIaw4hG"
                download="Yibeltal_Ebabu_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button variant="outline" className="w-full py-3 text-base">
                  Download CV
                </Button>
              </a>
              <a
                href="#contact"
                className="block w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="w-full py-3 text-base">
                  Contact Me
                </Button>
              </a>
            </div>

            {/* Ethiopian flag accent */}
            <div className="w-32 h-1 ethiopian-accent rounded-full mt-6" />
          </div>
        </div>
      )}
    </>
  )
}
