'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { apiClient } from '@/lib/api'
import { Button } from '@/components/shared/Button'
import { formatDate, truncate } from '@/lib/utils'

interface Post {
  id: string
  title: string
  slug: string
  excerpt?: string
  featuredImageUrl?: string
  publishedAt: string
  viewCount: number
  category?: { name: string }
}

export default function NewsListPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true)
        const response = await apiClient.getPosts({
          status: 'published',
          page,
          limit: 10,
          search: searchQuery,
        })
        if (response.data) {
          setPosts(response.data)
          setTotalPages(response.pagination?.totalPages || 1)
        }
      } catch (err: any) {
        setError(err.message || 'Failed to load posts')
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [page, searchQuery])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Son Haberler</h1>
          <p className="text-lg opacity-90">Okuldan en son haberleri ve duyuruları takip edin</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Haberleri ara..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setPage(1)
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 mb-8">
            {error}
          </div>
        )}

        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin">Yükleniyor...</div>
          </div>
        ) : posts.length > 0 ? (
          <>
            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {posts.map((post) => (
                <Link key={post.id} href={`/haberler/${post.slug}`}>
                  <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer h-full">
                    {/* Image */}
                    {post.featuredImageUrl && (
                      <div className="h-48 bg-gray-200 overflow-hidden">
                        <img
                          src={post.featuredImageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-4">
                      {post.category && (
                        <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-2">
                          {post.category.name}
                        </span>
                      )}

                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        {post.title}
                      </h3>

                      {post.excerpt && (
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {truncate(post.excerpt, 100)}
                        </p>
                      )}

                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{formatDate(post.publishedAt)}</span>
                        <span>👁️ {post.viewCount}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2">
                <Button
                  variant="outline"
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                >
                  ← Önceki
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`px-4 py-2 rounded-lg font-semibold transition ${
                      page === p
                        ? 'bg-primary-600 text-white'
                        : 'bg-white border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {p}
                  </button>
                ))}

                <Button
                  variant="outline"
                  disabled={page === totalPages}
                  onClick={() => setPage(page + 1)}
                >
                  Sonraki →
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Haber bulunamadı</p>
          </div>
        )}
      </div>
    </div>
  )
}
