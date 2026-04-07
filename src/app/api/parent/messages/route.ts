import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const mockMessages = [
      {
        id: '1',
        senderId: '3',
        senderName: 'Öğretmen Ayşe',
        subject: 'Ahmet hakkında bilgilendirme',
        content: 'Ahmet derslerde çok iyi çalışıyor. Devamını bekliyoruz.',
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        isRead: true,
      },
      {
        id: '2',
        senderId: '4',
        senderName: 'Rehber Öğretmen',
        subject: 'Akademik danışmanlık',
        content: 'Ahmet ile sonraki dönem planları hakkında konuşmak isteriz.',
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        isRead: false,
      },
    ]

    return NextResponse.json(
      {
        success: true,
        data: mockMessages,
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

    const newMessage = {
      id: String(Date.now()),
      senderId: '2',
      senderName: 'Veli',
      subject: body.subject,
      content: body.content,
      createdAt: new Date().toISOString(),
      isRead: false,
    }

    return NextResponse.json(
      {
        success: true,
        data: newMessage,
        message: 'Message sent successfully',
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
