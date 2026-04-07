import { NextRequest, NextResponse } from 'next/server'

// Mock social posts
const mockSocialPosts: any[] = [
  {
    id: '1',
    content: '🎉 Okulumuzda spor günü başlıyor! Herkesi bekliyoruz.',
    status: 'published',
    platforms: ['facebook', 'instagram'],
    scheduledAt: null,
    publishedAt: new Date().toISOString(),
  },
]

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(
      {
        success: true,
        data: mockSocialPosts,
        pagination: {
          page: 1,
          limit: 20,
          total: mockSocialPosts.length,
          totalPages: 1,
          hasNext: false,
          hasPrev: false,
        },
      },
      { status: 200 }
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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const newPost = {
      id: String(mockSocialPosts.length + 1),
      content: body.content,
      status: body.status || 'draft',
      platforms: body.platforms || [],
      scheduledAt: body.scheduledAt || null,
      publishedAt: body.status === 'published' ? new Date().toISOString() : null,
    }

    mockSocialPosts.push(newPost)

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
