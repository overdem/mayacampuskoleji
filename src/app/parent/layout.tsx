'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/authStore'

export default function ParentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const { user, logout, isAuthenticated } = useAuthStore()
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Check authentication
  if (!isAuthenticated()) {
    router.push('/parent/login')
    return null
  }

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  const menuItems = [
    { href: '/parent/dashboard', label: 'Anasayfa', icon: '🏠' },
    { href: '/parent/students', label: 'Öğrencilerim', icon: '👥' },
    { href: '/parent/grades', label: 'Notlar', icon: '📚' },
    { href: '/parent/attendance', label: 'Devamsızlık', icon: '📅' },
    { href: '/parent/calendar', label: 'Takvim', icon: '🗓️' },
    { href: '/parent/notifications', label: 'Bildirimler', icon: '🔔' },
    { href: '/parent/messages', label: 'Mesajlar', icon: '💬' },
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-gradient-to-b from-secondary-700 to-secondary-900 text-white transition-all duration-300 flex flex-col`}
      >
        {/* Logo */}
        <div className="p-6 flex items-center justify-between">
          <div className={`flex items-center gap-3 ${!sidebarOpen && 'flex-col'}`}>
            <div className="text-2xl">👨‍👩‍👧</div>
            {sidebarOpen && <span className="font-bold">Campus Maya</span>}
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-3 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-secondary-600 transition text-sm"
            >
              <span className="text-lg">{item.icon}</span>
              {sidebarOpen && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-secondary-600">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-secondary-600 transition text-sm"
          >
            <span className="text-lg">🚪</span>
            {sidebarOpen && <span>Çıkış</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-600 hover:text-gray-900"
          >
            {sidebarOpen ? '⬅️' : '➡️'}
          </button>

          <div className="flex items-center gap-4">
            <span className="text-gray-700">{user?.fullName || 'Veli'}</span>
            <div className="w-8 h-8 bg-secondary-600 rounded-full flex items-center justify-center text-white font-bold">
              {user?.fullName?.[0] || 'V'}
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
