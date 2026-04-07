import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const mockAnalytics = {
      totalPosts: 15,
      totalViews: 3450,
      totalUsers: 250,
      byPlatform: {
        facebook: { reach: 1200, engagement: 150 },
        instagram: { reach: 950, engagement: 200 },
        twitter: { reach: 500, engagement: 75 },
        linkedin: { reach: 300, engagement: 45 },
      },
      topPosts: [
        { title: 'Spor günü etkinliği', views: 450 },
        { title: 'Yeni eğitim yılı', views: 380 },
        { title: 'Proje sergisi', views: 290 },
      ],
    }

    return NextResponse.json(
      {
        success: true,
        data: mockAnalytics,
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
