'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function TopNavBar() {
  const router = useRouter()

  const navLinks = [
    { label: 'Felsefemiz', href: '#philosophy' },
    { label: 'Programlar', href: '#programs' },
    { label: 'Kampüs Hayatı', href: '#campus-life' },
    { label: 'Başvuru', href: '#admissions' },
    { label: 'İletişim', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl bg-opacity-80 shadow-sm h-20 border-b border-outline-variant/10">
      <div className="flex justify-between items-center px-8 h-full max-w-screen-2xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter text-primary uppercase font-headline">
            Campus Maya Koleji
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-headline tracking-tight text-sm font-semibold"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Parent Portal Button */}
        <button
          onClick={() => router.push('/parent/login')}
          className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-label font-semibold text-sm hover:opacity-90 active:scale-95 transition-all"
        >
          Veli Portalı
        </button>
      </div>
    </nav>
  )
}
