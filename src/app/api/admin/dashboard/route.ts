import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const mockDashboard = {
      totalPosts: 15,
      totalViews: 3450,
      totalUsers: 250,
      recentActivity: [
        { title: 'Yeni yazı yayınlandı', description: 'Spor günü hakkında', time: '1 saat önce' },
        { title: 'Yorum yapıldı', description: 'Blog yazısına yorum', time: '2 saat önce' },
        { title: 'Medya yüklendi', description: '5 yeni resim eklendi', time: '3 saat önce' },
      ],
    }

    return NextResponse.json(
      {
        success: true,
        data: mockDashboard,
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
