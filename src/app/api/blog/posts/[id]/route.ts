import { NextRequest, NextResponse } from 'next/server'

// Mock posts database (same as parent)
const mockPosts = [
  {
    id: '1',
    title: 'Yeni Eğitim Yılı Başladı',
    slug: 'yeni-egitim-yili',
    content: 'Okul yeni eğitim yılına başladı. Bu yıl birçok yenilik getireceğiz...',
    excerpt: 'Okul yeni eğitim yılına başladı',
    featuredImageUrl: 'https://via.placeholder.com/800x400',
    author: { id: '1', fullName: 'Admin User' },
    category: { id: '1', name: 'Duyuru' },
    status: 'published',
    publishedAt: new Date().toISOString(),
    viewCount: 245,
    tags: [{ id: '1', name: 'okul' }],
  },
]

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const post = mockPosts.find((p) => p.id === id)

    if (!post) {
      return NextResponse.json(
        {
          success: false,
          error: 'NOT_FOUND',
          message: 'Post not found',
        },
        { status: 404 }
      )
    }

    // Increment view count
    post.viewCount += 1

    return NextResponse.json(
      {
        success: true,
        data: post,
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

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const postIndex = mockPosts.findIndex((p) => p.id === id)

    if (postIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          error: 'NOT_FOUND',
          message: 'Post not found',
        },
        { status: 404 }
      )
    }

    const body = await request.json()
    const updatedPost = { ...mockPosts[postIndex], ...body }
    mockPosts[postIndex] = updatedPost

    return NextResponse.json(
      {
        success: true,
        data: updatedPost,
        message: 'Post updated successfully',
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const postIndex = mockPosts.findIndex((p) => p.id === id)

    if (postIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          error: 'NOT_FOUND',
          message: 'Post not found',
        },
        { status: 404 }
      )
    }

    mockPosts.splice(postIndex, 1)

    return NextResponse.json(
      {
        success: true,
        message: 'Post deleted successfully',
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
