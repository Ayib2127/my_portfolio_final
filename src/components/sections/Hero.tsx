'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { heroContent } from '@/data/personal'
import Button from '@/components/ui/Button'
import { HiDownload, HiMail } from 'react-icons/hi'
import { FaLinkedin, FaGithub, FaTelegram } from 'react-icons/fa'

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % heroContent.titles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary-600 font-semibold text-lg mb-4"
            >
              {heroContent.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4"
            >
              {heroContent.name}
            </motion.h1>

            {/* Ethiopian Flag Accent */}
            <div className="w-32 h-1 ethiopian-accent rounded-full mb-6" />

            {/* Animated Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="h-20 mb-6"
            >
              <p className="text-2xl md:text-3xl font-semibold text-gray-700">
                I&apos;m a{' '}
                <span className="gradient-text">
                  {heroContent.titles[titleIndex]}
                </span>
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-600 mb-8 max-w-xl"
            >
              {heroContent.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a 
                href={heroContent.cta.primary.href} 
                download="Yibeltal_Ebabu_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="group">
                  <HiDownload className="mr-2 group-hover:animate-bounce" />
                  {heroContent.cta.primary.text}
                </Button>
              </a>
              <a href={heroContent.cta.secondary.href}>
                <Button variant="outline" size="lg" className="group">
                  <HiMail className="mr-2 group-hover:scale-110 transition-transform" />
                  {heroContent.cta.secondary.text}
                </Button>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex space-x-4"
            >
              <a
                href={heroContent.social?.linkedin || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white shadow-md rounded-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href={heroContent.social?.github || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white shadow-md rounded-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href={heroContent.social?.telegram || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white shadow-md rounded-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Telegram"
              >
                <FaTelegram className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Profile Image */}
              <div className="w-full rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100 p-4">
                <img
                  src="https://res.cloudinary.com/dbn8jx8bh/image/upload/w_1200,q_auto,f_auto/v1764151979/yb1_xoxfli.png"
                  alt="Yibeltal Ebabu Dires"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-400 rounded-2xl shadow-xl float-animation" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary-500 rounded-2xl shadow-xl float-animation animation-delay-2000" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-500 mb-2">Scroll Down</p>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
