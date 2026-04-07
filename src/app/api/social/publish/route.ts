import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const mockResult = {
      postId: body.postId,
      published: true,
      results: {
        facebook: { success: true, postId: 'fb_123456' },
        instagram: { success: true, postId: 'ig_789012' },
        twitter: { success: true, postId: 'tw_345678' },
        linkedin: { success: true, postId: 'li_901234' },
      },
    }

    return NextResponse.json(
      {
        success: true,
        data: mockResult,
        message: 'Post published successfully to all platforms',
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
