'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/shared/Button'
import { apiClient } from '@/lib/api'

interface DashboardStats {
  totalPosts: number
  totalViews: number
  totalUsers: number
  recentActivity: any[]
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await apiClient.getDashboard()
        if (response.success && response.data) {
          setStats(response.data)
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
        <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Site yönetimi ve analiz</p>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      {/* Stats Grid */}
      {stats && (
        <div className="grid md:grid-cols-3 gap-6">
          {/* Total Posts */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Toplam Yazı</p>
                <p className="text-4xl font-bold text-primary-600 mt-2">
                  {stats.totalPosts}
                </p>
              </div>
              <div className="text-5xl text-primary-100">📝</div>
            </div>
          </div>

          {/* Total Views */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Toplam Görüntülenme</p>
                <p className="text-4xl font-bold text-secondary-600 mt-2">
                  {stats.totalViews.toLocaleString()}
                </p>
              </div>
              <div className="text-5xl text-secondary-100">👁️</div>
            </div>
          </div>

          {/* Total Users */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Toplam Kullanıcı</p>
                <p className="text-4xl font-bold text-accent-600 mt-2">
                  {stats.totalUsers}
                </p>
              </div>
              <div className="text-5xl text-accent-100">👥</div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Hızlı İşlemler</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <Button variant="primary" asLink href="/admin/blog" className="w-full">
            ✍️ Yeni Yazı
          </Button>
          <Button variant="secondary" asLink href="/admin/media" className="w-full">
            📸 Resim Yükle
          </Button>
          <Button variant="accent" asLink href="/admin/social" className="w-full">
            📱 Sosyal Paylaş
          </Button>
          <Button variant="ghost" asLink href="/admin/analytics" className="w-full">
            📊 Analiz
          </Button>
        </div>
      </div>

      {/* Recent Activity */}
      {stats && stats.recentActivity.length > 0 && (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Son Aktiviteler</h2>
          <div className="space-y-4">
            {stats.recentActivity.slice(0, 5).map((activity: any, idx: number) => (
              <div key={idx} className="flex items-center gap-4 pb-4 border-b last:border-b-0">
                <div className="w-3 h-3 bg-primary-600 rounded-full" />
                <div className="flex-1">
                  <p className="text-gray-900 font-medium">{activity.title}</p>
                  <p className="text-gray-600 text-sm">{activity.description}</p>
                </div>
                <p className="text-gray-500 text-sm">{activity.time}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-6 border border-primary-200">
          <h3 className="text-xl font-bold text-primary-900 mb-4">📚 İçerik Yönetimi</h3>
          <ul className="space-y-2 text-primary-700">
            <li>
              <Button variant="ghost" asLink href="/admin/blog" className="text-left">
                → Blog Yazıları
              </Button>
            </li>
            <li>
              <Button variant="ghost" asLink href="/admin/media" className="text-left">
                → Medya Kütüphanesi
              </Button>
            </li>
            <li>
              <Button variant="ghost" asLink href="/admin/analytics" className="text-left">
                → Analitik
              </Button>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-lg p-6 border border-accent-200">
          <h3 className="text-xl font-bold text-accent-900 mb-4">📱 Sosyal Medya</h3>
          <ul className="space-y-2 text-accent-700">
            <li>
              <Button variant="ghost" asLink href="/admin/social" className="text-left">
                → Yayın Yap
              </Button>
            </li>
            <li>
              <Button variant="ghost" asLink href="/admin/social?tab=schedule" className="text-left">
                → Planlı Yayınlar
              </Button>
            </li>
            <li>
              <Button variant="ghost" asLink href="/admin/social?tab=analytics" className="text-left">
                → Sosyal Analitik
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
