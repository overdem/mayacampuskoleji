'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

const navItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: '📊' },
  { label: 'Blog Yönetimi', href: '/admin/blog', icon: '📝' },
  { label: 'Medya', href: '/admin/media', icon: '🖼️' },
  { label: 'Sosyal Medya', href: '/admin/social', icon: '📢' },
  { label: 'Analizler', href: '/admin/analytics', icon: '📈' },
]

export function AdminLayout({ children }: { children: ReactNode }) {
  const router = useRouter()

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-800">
          <h1 className="text-xl font-bold font-headline">Campus Maya</h1>
          <p className="text-sm text-gray-400 mt-1">Admin Paneli</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-base text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-semibold">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800">
          <button
            onClick={() => router.push('/admin/login')}
            className="w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-base text-sm font-semibold transition-colors duration-200"
          >
            Çıkış Yap
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  )
}
