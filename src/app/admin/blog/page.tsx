'use client'

import { useState, useEffect } from 'react'
import { AdminLayout } from '@/components/layout/AdminLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Table } from '@/components/ui/Table'
import { Badge } from '@/components/ui/Badge'
import { apiClient } from '@/lib/api'
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
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await apiClient.getPosts({ limit: 100 })
        if (response.data) {
          setPosts(response.data)
        }
      } catch (err) {
        console.error(err)
      }
    }
    fetchPosts()
  }, [])

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const tableRows = filteredPosts.map((post) => [
    post.title,
    <Badge key={post.id} variant={post.status === 'published' ? 'success' : 'default'}>
      {post.status === 'published' ? '✓ Yayında' : '📝 Taslak'}
    </Badge>,
    post.publishedAt ? formatDate(post.publishedAt) : '—',
    `👁️ ${post.viewCount}`,
    '✏️ Düzenle',
  ])

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold font-headline text-gray-900">Blog Yazıları</h1>
          <p className="text-gray-600 mt-1">Tüm yazıları yönet ve düzenle</p>
        </div>
        <Button variant="primary" onClick={() => {}}>✍️ Yeni Yazı</Button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <Input
          placeholder="Yazıları ara..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Table */}
      <Card>
        {filteredPosts.length > 0 ? (
          <Table
            headers={['Başlık', 'Durum', 'Yayın Tarihi', 'Görüntülemeler', 'İşlemler']}
            rows={tableRows}
          />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 font-semibold">Yazı bulunamadı</p>
          </div>
        )}
      </Card>
    </AdminLayout>
  )
}
