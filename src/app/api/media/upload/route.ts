import { NextRequest, NextResponse } from 'next/server'

// Mock media storage
const mockMedia: any[] = []

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json(
        {
          success: false,
          error: 'VALIDATION_ERROR',
          message: 'No file provided',
        },
        { status: 422 }
      )
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'video/mp4']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        {
          success: false,
          error: 'VALIDATION_ERROR',
          message: 'File type not allowed',
        },
        { status: 422 }
      )
    }

    // Validate file size (max 50MB)
    if (file.size > 50 * 1024 * 1024) {
      return NextResponse.json(
        {
          success: false,
          error: 'VALIDATION_ERROR',
          message: 'File too large',
        },
        { status: 422 }
      )
    }

    // Create mock media object
    const media = {
      id: String(mockMedia.length + 1),
      filename: file.name,
      fileUrl: `https://cdn.example.com/media/${file.name}`,
      fileSize: file.size,
      mimeType: file.type,
      type: file.type.startsWith('image') ? 'image' : 'video',
      uploadedById: '1',
      createdAt: new Date().toISOString(),
    }

    mockMedia.push(media)

    return NextResponse.json(
      {
        success: true,
        data: { media },
        message: 'File uploaded successfully',
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
