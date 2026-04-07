import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Validation schema
const postFilterSchema = z.object({
  status: z.enum(['draft', 'published']).optional(),
  page: z.string().transform(Number).default('1'),
  limit: z.string().transform(Number).default('10'),
  search: z.string().optional(),
})

// Mock posts database
const mockPosts = [
  {
    id: '1',
    title: 'Yeni Eğitim Yılı Başladı',
    slug: 'yeni-egitim-yili',
    content: 'Okul yeni eğitim yılına başladı...',
    excerpt: 'Okul yeni eğitim yılına başladı',
    featuredImageUrl: 'https://via.placeholder.com/800x400',
    author: { id: '1', fullName: 'Admin User' },
    category: { id: '1', name: 'Duyuru' },
    status: 'published',
    publishedAt: new Date().toISOString(),
    viewCount: 245,
    tags: [{ id: '1', name: 'okul' }],
  },
  {
    id: '2',
    title: 'Spor Günü Etkinliği',
    slug: 'spor-gunu-etkinligi',
    content: 'Okulumuzda düzenlenen spor günü...',
    excerpt: 'Okulumuzda düzenlenen spor günü',
    featuredImageUrl: 'https://via.placeholder.com/800x400',
    author: { id: '1', fullName: 'Admin User' },
    category: { id: '2', name: 'Etkinlik' },
    status: 'published',
    publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    viewCount: 182,
    tags: [{ id: '2', name: 'spor' }],
  },
]

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const filters = postFilterSchema.parse({
      status: searchParams.get('status'),
      page: searchParams.get('page'),
      limit: searchParams.get('limit'),
      search: searchParams.get('search'),
    })

    // Filter posts
    let filtered = mockPosts

    if (filters.status) {
      filtered = filtered.filter((p) => p.status === filters.status)
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchLower) ||
          p.excerpt.toLowerCase().includes(searchLower)
      )
    }

    // Pagination
    const total = filtered.length
    const start = (filters.page - 1) * filters.limit
    const end = start + filters.limit
    const data = filtered.slice(start, end)

    return NextResponse.json(
      {
        success: true,
        data,
        pagination: {
          page: filters.page,
          limit: filters.limit,
          total,
          totalPages: Math.ceil(total / filters.limit),
          hasNext: end < total,
          hasPrev: filters.page > 1,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'VALIDATION_ERROR',
          message: error.errors[0].message,
        },
        { status: 422 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        error: 'INTERNAL_ERROR',
        message: 'An error occurred',
      },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.title || !body.content) {
      return NextResponse.json(
        {
          success: false,
          error: 'VALIDATION_ERROR',
          message: 'Title and content are required',
        },
        { status: 422 }
      )
    }

    // Create new post
    const newPost = {
      id: String(mockPosts.length + 1),
      title: body.title,
      slug: body.title.toLowerCase().replace(/\s+/g, '-'),
      content: body.content,
      excerpt: body.excerpt || body.content.substring(0, 200),
      featuredImageUrl: body.featuredImageUrl,
      author: { id: '1', fullName: 'Admin User' },
      category: body.category,
      status: body.status || 'draft',
      publishedAt: body.publishedAt || new Date().toISOString(),
      viewCount: 0,
      tags: body.tags || [],
    }

    mockPosts.unshift(newPost)

    return NextResponse.json(
      {
        success: true,
        data: newPost,
        message: 'Post created successfully',
      },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'INTERNAL_ERROR',
        message: 'An error occurred',
      },
      { status: 500 }
    )
  }
}
