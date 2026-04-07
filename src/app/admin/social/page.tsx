'use client'

import { useState, useEffect } from 'react'
import { apiClient } from '@/lib/api'
import { Button } from '@/components/shared/Button'

interface SocialPost {
  id: string
  content: string
  status: string
  platforms?: string[]
  scheduledAt?: string
}

export default function SocialPublisherPage() {
  const [content, setContent] = useState('')
  const [platforms, setPlatforms] = useState<string[]>([])
  const [scheduleDate, setScheduleDate] = useState('')
  const [posts, setPosts] = useState<SocialPost[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await apiClient.getSocialPosts({ limit: 20 })
        if (response.data) {
          setPosts(response.data)
        }
      } catch (err: any) {
        setError(err.message)
      }
    }

    fetchPosts()
  }, [])

  const handlePublish = async () => {
    if (!content.trim()) {
      setError('İçerik boş olamaz')
      return
    }

    setIsLoading(true)
    try {
      const response = await apiClient.createSocialPost({
        content,
        platforms,
        status: scheduleDate ? 'scheduled' : 'draft',
        scheduledAt: scheduleDate || undefined,
      })

      if (response.data) {
        setPosts((prev) => [response.data, ...prev])
        setContent('')
        setPlatforms([])
        setScheduleDate('')
        setError('')
      }
    } catch (err: any) {
      setError(err.message || 'Failed to publish')
    } finally {
      setIsLoading(false)
    }
  }

  const platformOptions = [
    { id: 'facebook', label: '📘 Facebook', color: 'bg-blue-100 text-blue-700' },
    { id: 'instagram', label: '📷 Instagram', color: 'bg-pink-100 text-pink-700' },
    { id: 'twitter', label: '𝕏 Twitter', color: 'bg-gray-100 text-gray-700' },
    { id: 'linkedin', label: '💼 LinkedIn', color: 'bg-blue-100 text-blue-700' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Sosyal Medya Yayını</h2>
        <p className="text-gray-600 mt-1">Birden fazla platforma aynı anda paylaş</p>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      {/* Publisher */}
      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        {/* Content */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            İçerik
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Sosyal medyada paylaşılacak içeriği yazın..."
            maxLength={280}
            className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
          />
          <p className="text-gray-500 text-xs mt-2">
            {content.length} / 280 karakter
          </p>
        </div>

        {/* Platforms */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            Platformlar
          </label>
          <div className="grid md:grid-cols-4 gap-3">
            {platformOptions.map((platform) => (
              <button
                key={platform.id}
                onClick={() =>
                  setPlatforms((prev) =>
                    prev.includes(platform.id)
                      ? prev.filter((p) => p !== platform.id)
                      : [...prev, platform.id]
                  )
                }
                className={`px-4 py-3 rounded-lg font-semibold transition ${
                  platforms.includes(platform.id)
                    ? platform.color
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {platforms.includes(platform.id) ? '✓ ' : ''}{platform.label}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Yayın Tarihi (İsteğe Bağlı)
          </label>
          <input
            type="datetime-local"
            value={scheduleDate}
            onChange={(e) => setScheduleDate(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <Button
            variant="primary"
            onClick={handlePublish}
            isLoading={isLoading}
            disabled={!content.trim() || platforms.length === 0}
          >
            {scheduleDate ? '📅 Planla' : '📤 Yayınla'}
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setContent('')
              setPlatforms([])
              setScheduleDate('')
            }}
          >
            Temizle
          </Button>
        </div>
      </div>

      {/* Posts List */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Son Yayınlar</h3>

        {posts.length > 0 ? (
          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition"
              >
                <p className="text-gray-900 mb-3">{post.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {post.platforms?.map((platform) => (
                      <span
                        key={platform}
                        className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-semibold"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      post.status === 'published'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {post.status === 'published'
                      ? '✓ Yayında'
                      : '⏰ Planlandı'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">Henüz yayın yapılmadı</p>
        )}
      </div>
    </div>
  )
}
