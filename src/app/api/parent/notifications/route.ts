import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const mockNotifications = [
      {
        id: '1',
        title: 'Yeni not açıklandı',
        message: 'Ahmet için matematik notu açıklandı',
        type: 'grade',
        isRead: false,
        createdAt: new Date().toISOString(),
      },
      {
        id: '2',
        title: 'Devamsızlık uyarısı',
        message: 'Ahmet bu ay 1 gün devamsız',
        type: 'attendance',
        isRead: false,
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: '3',
        title: 'Yaklaşan etkinlik',
        message: 'Spor günü 10 Şubat tarihinde yapılacak',
        type: 'event',
        isRead: true,
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      },
    ]

    return NextResponse.json(
      {
        success: true,
        data: mockNotifications,
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
