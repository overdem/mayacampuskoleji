'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/shared/Button'
import { apiClient } from '@/lib/api'

interface ParentDashboard {
  student?: any
  grades?: any
  attendance?: any
  upcomingEvents?: any[]
  unreadNotifications: number
}

export default function ParentDashboardPage() {
  const [dashboard, setDashboard] = useState<ParentDashboard | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await apiClient.getDashboard()
        if (response.success && response.data) {
          setDashboard(response.data)
        } else {
          setError('Failed to load dashboard')
        }
      } catch (err: any) {
        setError(err.message || 'An error occurred')
      } finally {
        setIsLoading(false)
      }
    }

    fetchDashboard()
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin">Loading...</div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Hoş Geldiniz</h1>
        <p className="text-gray-600 mt-2">Öğrenci takip paneli ve iletişim merkezi</p>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      {dashboard && (
        <>
          {/* Student Selector */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Öğrenci Seç</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-6 border border-primary-200 cursor-pointer hover:shadow-lg transition">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-primary-700 font-medium">Öğrenci Adı</p>
                    <p className="text-2xl font-bold text-primary-900 mt-2">9-A</p>
                    <p className="text-primary-600 text-sm mt-2">Not Ortalaması: 85</p>
                  </div>
                  <div className="text-5xl">👦</div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Button variant="secondary" asLink href="/parent/students">
                Tüm Öğrencilerim
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Grades Summary */}
            <Link href="/parent/grades" className="block">
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Son Notlar</p>
                    <p className="text-4xl font-bold text-primary-600 mt-2">
                      {dashboard.grades?.average || '—'}
                    </p>
                  </div>
                  <div className="text-5xl">📚</div>
                </div>
              </div>
            </Link>

            {/* Attendance Summary */}
            <Link href="/parent/attendance" className="block">
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Devam Durumu</p>
                    <p className="text-4xl font-bold text-secondary-600 mt-2">
                      {dashboard.attendance?.percentage || '—'}%
                    </p>
                  </div>
                  <div className="text-5xl">✅</div>
                </div>
              </div>
            </Link>

            {/* Notifications */}
            <Link href="/parent/notifications" className="block">
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Yeni Bildirimler</p>
                    <p className="text-4xl font-bold text-accent-600 mt-2">
                      {dashboard.unreadNotifications}
                    </p>
                  </div>
                  <div className="text-5xl">🔔</div>
                </div>
              </div>
            </Link>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Hızlı Erişim</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Button
                variant="primary"
                asLink
                href="/parent/grades"
                className="w-full justify-center"
              >
                📊 Notlar
              </Button>
              <Button
                variant="secondary"
                asLink
                href="/parent/attendance"
                className="w-full justify-center"
              >
                📅 Devamsızlık
              </Button>
              <Button
                variant="accent"
                asLink
                href="/parent/calendar"
                className="w-full justify-center"
              >
                🗓️ Takvim
              </Button>
              <Button
                variant="ghost"
                asLink
                href="/parent/messages"
                className="w-full justify-center"
              >
                💬 Mesajlar
              </Button>
            </div>
          </div>

          {/* Upcoming Events */}
          {dashboard.upcomingEvents && dashboard.upcomingEvents.length > 0 && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Yaklaşan Etkinlikler</h2>
              <div className="space-y-4">
                {dashboard.upcomingEvents.slice(0, 5).map((event: any, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 pb-4 border-b last:border-b-0"
                  >
                    <div className="text-2xl">{event.icon || '📌'}</div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{event.title}</p>
                      <p className="text-gray-600 text-sm">{event.description}</p>
                      <p className="text-primary-600 text-sm mt-1">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="secondary" asLink href="/parent/calendar">
                  Tüm Etkinlikleri Gör
                </Button>
              </div>
            </div>
          )}

          {/* Support Section */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-6 border border-primary-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📞 İhtiyacınız Var mı?</h2>
            <p className="text-gray-600 mb-4">
              Soru, şikayet veya önerileriniz için bize yazabilirsiniz.
            </p>
            <Button variant="primary" asLink href="/parent/messages">
              Öğretmen ile İletişime Geç
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
