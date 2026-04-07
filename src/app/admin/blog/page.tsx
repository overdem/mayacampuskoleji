'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { apiClient } from '@/lib/api'
import { Button } from '@/components/shared/Button'
import { formatDate } from '@/lib/utils'

interface Post {
  id: string
  title: string
  status: string
  publishedAt?: string
  viewCount: number
}

export default function BlogManagerPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await apiClient.getPosts({ limit: 100 })
        if (response.data) {
          setPosts(response.data)
        }
      } catch (err: any) {
        setError(err.message || 'Failed to load posts')
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Blog Yazıları</h2>
          <p className="text-gray-600 mt-1">Tüm yazıları yönet ve düzenle</p>
        </div>
        <Button variant="primary" asLink href="/admin/blog/new">
          ✍️ Yeni Yazı
        </Button>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      {/* Search */}
      <input
        type="text"
        placeholder="Yazıları ara..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
      />

      {/* Posts Table */}
      {isLoading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin">Yükleniyor...</div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Başlık
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Durum
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Yayın Tarihi
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Görüntülemeler
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  İşlemler
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredPosts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">{post.title}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        post.status === 'published'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {post.status === 'published' ? '✓ Yayında' : '📝 Taslak'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm">
                    {post.publishedAt ? formatDate(post.publishedAt) : '—'}
                  </td>
                  <td className="px-6 py-4 text-gray-600">👁️ {post.viewCount}</td>
                  <td className="px-6 py-4 space-x-2">
                    <Button variant="ghost" size="sm" asLink href={`/admin/blog/${post.id}`}>
                      Düzenle
                    </Button>
                    <Button variant="danger" size="sm">
                      Sil
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">Yazı bulunamadı</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
