import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const mockEvents = [
      {
        id: '1',
        title: '1. Dönem Final Sınavları',
        description: 'Tüm sınıflar için final sınavları',
        eventType: 'exam',
        startDate: '2025-01-15',
        endDate: '2025-01-25',
        location: 'Okul Binası',
      },
      {
        id: '2',
        title: 'Kış Tatili',
        description: 'Kış tatil başlıyor',
        eventType: 'holiday',
        startDate: '2024-12-23',
        endDate: '2025-01-06',
      },
      {
        id: '3',
        title: 'Spor Günü',
        description: 'Okulun geleneksel spor günü',
        eventType: 'event',
        startDate: '2025-02-10',
        location: 'Spor Salanı',
      },
      {
        id: '4',
        title: 'Proje Ödevi Teslim',
        description: 'Matematik projesi teslim tarihi',
        eventType: 'deadline',
        startDate: '2025-01-30',
      },
    ]

    return NextResponse.json(
      {
        success: true,
        data: mockEvents,
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
