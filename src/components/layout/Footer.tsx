import React from 'react'
import Link from 'next/link'
import { footerLinks } from '@/data/navigation'
import { personalInfo } from '@/data/personal'
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden border-2 border-primary-400 shadow-md">
                <img
                  src="https://res.cloudinary.com/dbn8jx8bh/image/upload/w_40,h_40,c_fill,g_face,q_auto,f_auto/v1764151979/yb2_qyry3u.png"
                  alt="Yibeltal Ebabu"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">Yibeltal Ebabu Dires</h3>
                <div className="w-20 h-0.5 ethiopian-accent rounded-full mt-1" />
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Structural Engineer and Engineering Software Trainer specializing in high-rise building design 
              and advanced engineering software training in Ethiopia.
            </p>
            <div className="space-y-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors"
              >
                <FaEnvelope className="w-4 h-4" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors"
              >
                <FaPhone className="w-4 h-4" />
                <span>{personalInfo.phone}</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400">
                <FaMapMarkerAlt className="w-4 h-4" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              {personalInfo.social.linkedin && (
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              )}
              {personalInfo.social.github && (
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              )}
              {personalInfo.social.twitter && (
                <a
                  href={personalInfo.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
              )}
            </div>

            <p className="text-gray-400 text-sm">
              © {currentYear} Yibeltal Ebabu Dires. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Ethiopian Flag Accent */}
      <div className="w-full h-1 ethiopian-accent" />
    </footer>
  )
}
