'use client'

import { useState, useEffect } from 'react'
import { apiClient } from '@/lib/api'

interface Analytics {
  totalPosts: number
  totalViews: number
  totalUsers: number
  byPlatform: Record<string, any>
  topPosts: Array<{
    title: string
    views: number
  }>
}

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState<Analytics | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [dateRange, setDateRange] = useState('7d')

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await apiClient.getAnalytics({
          range: dateRange,
        })
        if (response.data) {
          setAnalytics(response.data)
        }
      } catch (err: any) {
        setError(err.message || 'Failed to load analytics')
      } finally {
        setIsLoading(false)
      }
    }

    fetchAnalytics()
  }, [dateRange])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Analitik</h2>
          <p className="text-gray-600 mt-1">Site performansı ve istatistikler</p>
        </div>

        <div className="flex gap-2">
          {['7d', '30d', '90d'].map((range) => (
            <button
              key={range}
              onClick={() => setDateRange(range)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                dateRange === range
                  ? 'bg-primary-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {range === '7d' && 'Son 7 Gün'}
              {range === '30d' && 'Son 30 Gün'}
              {range === '90d' && 'Son 90 Gün'}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      {isLoading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin">Yükleniyor...</div>
        </div>
      ) : analytics ? (
        <div className="space-y-6">
          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-600 text-sm font-medium">Toplam Yazı</p>
              <p className="text-4xl font-bold text-primary-600 mt-4">
                {analytics.totalPosts}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-600 text-sm font-medium">Toplam Görüntülenme</p>
              <p className="text-4xl font-bold text-secondary-600 mt-4">
                {analytics.totalViews.toLocaleString()}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-600 text-sm font-medium">Aktif Kullanıcı</p>
              <p className="text-4xl font-bold text-accent-600 mt-4">
                {analytics.totalUsers}
              </p>
            </div>
          </div>

          {/* Platform Stats */}
          {analytics.byPlatform && (
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Platform Performansı</h3>

              <div className="space-y-4">
                {Object.entries(analytics.byPlatform).map(([platform, stats]: any) => (
                  <div key={platform} className="pb-4 border-b last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-gray-900 capitalize">
                        {platform === 'facebook' && '📘 Facebook'}
                        {platform === 'instagram' && '📷 Instagram'}
                        {platform === 'twitter' && '𝕏 Twitter'}
                        {platform === 'linkedin' && '💼 LinkedIn'}
                      </p>
                      <p className="text-gray-600">{stats.reach} erişim</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full"
                        style={{
                          width: `${
                            (stats.reach /
                              Math.max(
                                ...Object.values(analytics.byPlatform).map(
                                  (s: any) => s.reach
                                )
                              )) *
                            100
                          }%`,
                        }}
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      👥 {stats.engagement} etkileşim
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Top Posts */}
          {analytics.topPosts && analytics.topPosts.length > 0 && (
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">En Çok Görüntülenen</h3>

              <div className="space-y-3">
                {analytics.topPosts.slice(0, 5).map((post, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{post.title}</p>
                    </div>
                    <p className="text-gray-600 font-semibold">
                      👁️ {post.views.toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">Veri bulunamadı</p>
        </div>
      )}
    </div>
  )
}
