'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'

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
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm h-20 border-b border-gray-200">
      <div className="flex justify-between items-center px-4 md:px-8 h-full max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-lg md:text-xl font-bold tracking-tighter text-primary uppercase font-headline">
            Campus Maya
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-primary transition-colors duration-200 font-body text-sm font-semibold"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Parent Portal Button */}
        <Button
          variant="primary"
          onClick={() => router.push('/parent/login')}
        >
          Veli Portalı
        </Button>
      </div>
    </nav>
  )
}
