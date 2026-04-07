'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md h-16 md:h-20">
      <div className="h-full max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg md:text-2xl font-bold text-primary font-headline">
            Campus Maya
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#hakkimizda" className="text-gray-700 hover:text-primary font-body text-sm font-medium transition-colors">
            Hakkımızda
          </a>
          <a href="#programlar" className="text-gray-700 hover:text-primary font-body text-sm font-medium transition-colors">
            Programlar
          </a>
          <a href="#galeri" className="text-gray-700 hover:text-primary font-body text-sm font-medium transition-colors">
            Galeri
          </a>
          <a href="#blog" className="text-gray-700 hover:text-primary font-body text-sm font-medium transition-colors">
            Blog
          </a>
          <a href="#iletisim" className="text-gray-700 hover:text-primary font-body text-sm font-medium transition-colors">
            İletişim
          </a>
        </div>

        {/* Parent Portal Button */}
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 bg-primary text-white rounded-md font-headline font-semibold text-sm hover:bg-primary-600 transition-colors">
            Veli Portalı
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 md:hidden">
            <div className="flex flex-col p-4 gap-2">
              <a href="#hakkimizda" className="text-gray-700 hover:text-primary py-2 font-body">
                Hakkımızda
              </a>
              <a href="#programlar" className="text-gray-700 hover:text-primary py-2 font-body">
                Programlar
              </a>
              <a href="#galeri" className="text-gray-700 hover:text-primary py-2 font-body">
                Galeri
              </a>
              <a href="#blog" className="text-gray-700 hover:text-primary py-2 font-body">
                Blog
              </a>
              <a href="#iletisim" className="text-gray-700 hover:text-primary py-2 font-body">
                İletişim
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
