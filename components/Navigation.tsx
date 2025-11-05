'use client'

import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About', num: '01' },
    { href: '#experience', label: 'Experience', num: '02' },
    { href: '#skills', label: 'Skills', num: '03' },
    { href: '#projects', label: 'Projects', num: '04' },
    { href: '#contact', label: 'Contact', num: '05' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-900/80 backdrop-blur-md border-b border-dark-700'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
          <a
            href="#"
            className="text-xl font-bold font-mono text-primary-400 hover:text-primary-300 transition-colors"
          >
            {'<Andrew Budziszek />'}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-gray-300 hover:text-primary-400 transition-colors font-mono text-sm group relative"
              >
                <span className="text-dark-400 group-hover:text-primary-600">{link.num}</span>
                <span className="mx-2">{link.label}</span>
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/andrew-budziszek-929a1663/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded hover:from-primary-500 hover:to-primary-600 transition-all font-mono text-sm"
            >
              LinkedIn
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-primary-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes size={24} />
            ) : (
              <FaBars size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-dark-800 border-t border-dark-700">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-gray-300 hover:text-primary-400 transition-colors font-mono text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-dark-400">{link.num}</span> {link.label}
                </a>
              ))}
              <a
                href="https://www.linkedin.com/in/andrew-budziszek-929a1663/"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2 rounded text-center font-mono text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                LinkedIn
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
