'use client'

import { useState, useEffect } from 'react'
import { AdminLayout } from '@/components/layout/AdminLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { apiClient } from '@/lib/api'

interface DashboardStats {
  totalPosts: number
  totalViews: number
  totalUsers: number
  recentActivity: any[]
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null)

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await apiClient.getDashboard()
        if (response.success && response.data) {
          setStats(response.data)
        }
      } catch (err) {
        console.error(err)
      }
    }
    fetchDashboard()
  }, [])

  return (
    <AdminLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-headline text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Site yönetimi ve analiz</p>
      </div>

      {/* Stats Grid (4 columns - Design.md spec) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card hoverable>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-semibold">Toplam Yazı</p>
              <p className="text-3xl font-bold font-headline text-primary mt-2">{stats?.totalPosts || 0}</p>
            </div>
            <span className="text-4xl">📝</span>
          </div>
        </Card>

        <Card hoverable>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-semibold">Görüntülenme</p>
              <p className="text-3xl font-bold font-headline text-secondary mt-2">
                {stats?.totalViews.toLocaleString() || 0}
              </p>
            </div>
            <span className="text-4xl">👁️</span>
          </div>
        </Card>

        <Card hoverable>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-semibold">Kullanıcılar</p>
              <p className="text-3xl font-bold font-headline text-accent mt-2">{stats?.totalUsers || 0}</p>
            </div>
            <span className="text-4xl">👥</span>
          </div>
        </Card>

        <Card hoverable>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-semibold">Bu Ay</p>
              <p className="text-3xl font-bold font-headline text-info mt-2">8</p>
            </div>
            <span className="text-4xl">✨</span>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="mb-8">
        <h2 className="text-2xl font-bold font-headline text-gray-900 mb-4">Hızlı İşlemler</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="primary" onClick={() => {}}>✍️ Yazı Ekle</Button>
          <Button variant="secondary" onClick={() => {}}>🖼️ Resim Yükle</Button>
          <Button variant="primary" onClick={() => {}}>📢 Sosyal Paylaş</Button>
          <Button variant="secondary" onClick={() => {}}>📊 Analiz</Button>
        </div>
      </Card>

      {/* Recent Activity */}
      <Card>
        <h2 className="text-2xl font-bold font-headline text-gray-900 mb-4">Son Aktiviteler</h2>
        <div className="space-y-3">
          {stats?.recentActivity?.slice(0, 5).map((activity: any, idx: number) => (
            <div key={idx} className="flex items-start gap-4 pb-3 border-b border-gray-200 last:border-b-0">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{activity.title}</p>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </div>
              <p className="text-xs text-gray-500 whitespace-nowrap">{activity.time}</p>
            </div>
          ))}
        </div>
      </Card>
    </AdminLayout>
  )
}
