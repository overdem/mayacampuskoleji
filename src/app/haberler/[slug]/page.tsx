'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { apiClient } from '@/lib/api'
import { formatDate } from '@/lib/utils'
import { Button } from '@/components/shared/Button'

interface Post {
  id: string
  title: string
  content: string
  excerpt?: string
  featuredImageUrl?: string
  publishedAt: string
  viewCount: number
  author?: { fullName: string }
  category?: { name: string }
  tags?: { name: string }[]
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<Post | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await apiClient.getPost(params.slug)
        if (response.data) {
          setPost(response.data)
        }
      } catch (err: any) {
        setError(err.message || 'Failed to load post')
      } finally {
        setIsLoading(false)
      }
    }

    fetchPost()
  }, [params.slug])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin">Yükleniyor...</div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || 'Haber bulunamadı'}</p>
          <Link href="/haberler" className="text-primary-600 hover:text-primary-700">
            ← Haberlere Dön
          </Link>
        </div>
      </div>
    )
  }

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="text-primary-600 hover:text-primary-700">
            Anasayfa
          </Link>
          {' / '}
          <Link href="/haberler" className="text-primary-600 hover:text-primary-700">
            Haberler
          </Link>
          {' / '}
          <span className="text-gray-600">{post.title}</span>
        </div>
      </div>

      {/* Hero Image */}
      {post.featuredImageUrl && (
        <div className="h-96 bg-gray-200 overflow-hidden">
          <img
            src={post.featuredImageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-8">
          {post.category && (
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-4">
              {post.category.name}
            </span>
          )}

          <h1 className="text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm">
            {post.author && <span>Yazar: {post.author.fullName}</span>}
            <span>{formatDate(post.publishedAt)}</span>
            <span>👁️ {post.viewCount} görüntülenme</span>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div
            className="text-gray-700 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mb-12 pb-12 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Etiketler:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag.name}
                  href={`/haberler?tag=${tag.name}`}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300"
                >
                  #{tag.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Share Buttons */}
        <div className="mb-12 pb-12 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Paylaş:</h3>
          <div className="flex gap-4">
            <Button variant="outline">📘 Facebook</Button>
            <Button variant="outline">𝕏 Twitter</Button>
            <Button variant="outline">📌 Pinterest</Button>
            <Button variant="outline">🔗 Linki Kopyala</Button>
          </div>
        </div>

        {/* Back Link */}
        <Link href="/haberler" className="text-primary-600 hover:text-primary-700 font-medium">
          ← Diğer Haberleri Oku
        </Link>
      </div>
    </article>
  )
}
