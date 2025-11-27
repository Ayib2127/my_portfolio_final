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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-lg overflow-hidden border-2 border-primary-500 group-hover:scale-110 transition-transform duration-300 shadow-md">
              <Image
                src="https://res.cloudinary.com/dbn8jx8bh/image/upload/w_40,h_40,c_fill,g_face,q_auto,f_auto/v1764151979/yb2_qyry3u.png"
                alt="Yibeltal Ebabu"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-gray-900">Yibeltal Ebabu</span>
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

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="https://drive.google.com/uc?export=download&id=1O6cD2SdBb6iSqdDWZ3lLF4tBxHIaw4hG" 
              download="Yibeltal_Ebabu_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                Download CV
              </Button>
            </a>
            <a href="#contact">
              <Button size="sm">
                Contact Me
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6 text-gray-900" />
            ) : (
              <HiMenu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 top-20 bg-white/98 backdrop-blur-lg transition-all duration-300',
          isMobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 px-4">
          {navigationItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-2xl font-semibold text-gray-900 hover:text-primary-600 transition-colors duration-200"
              style={{
                animation: isMobileMenuOpen ? `slideDown 0.3s ease-out ${index * 0.1}s both` : 'none'
              }}
            >
              {item.label}
            </a>
          ))}
          
          <div className="flex flex-col space-y-4 w-full max-w-xs pt-8">
            <a href="/cv/Yibeltal_Ebabu_CV.pdf" download className="w-full">
              <Button variant="outline" className="w-full">
                Download CV
              </Button>
            </a>
            <a href="#contact" className="w-full">
              <Button className="w-full">
                Contact Me
              </Button>
            </a>
          </div>

          {/* Ethiopian flag accent */}
          <div className="w-32 h-1 ethiopian-accent rounded-full mt-8" />
        </nav>
      </div>
    </header>
  )
}
