import React from 'react'
import { cn } from '@/lib/utils'
import Container from './Container'

interface SectionProps {
  id?: string
  children: React.ReactNode
  className?: string
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  background?: 'white' | 'gray' | 'gradient' | 'primary'
}

export default function Section({
  id,
  children,
  className,
  containerSize = 'lg',
  background = 'white',
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-primary-50 via-white to-accent-50',
    primary: 'bg-primary-600 text-white',
  }
  
  return (
    <section
      id={id}
      className={cn('section-padding', backgrounds[background], className)}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  )
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  className,
}: {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
  className?: string
}) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      {subtitle && (
        <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {description}
        </p>
      )}
      {/* Ethiopian accent line */}
      <div className="w-24 h-1 ethiopian-accent mx-auto mt-6 rounded-full" />
    </div>
  )
}
