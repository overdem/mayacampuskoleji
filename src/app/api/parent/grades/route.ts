import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const studentId = request.nextUrl.searchParams.get('studentId')

    const mockGrades = {
      studentName: 'Ahmet Yılmaz',
      gpa: 3.75,
      average: 85.5,
      semester: 'Fall 2024',
      grades: [
        { subject: 'Matematik', grade: 92, percentage: 92, semester: 'Fall 2024' },
        { subject: 'Türkçe', grade: 88, percentage: 88, semester: 'Fall 2024' },
        { subject: 'İngilizce', grade: 85, percentage: 85, semester: 'Fall 2024' },
        { subject: 'Fen Bilgisi', grade: 90, percentage: 90, semester: 'Fall 2024' },
        { subject: 'Sosyal Bilgiler', grade: 78, percentage: 78, semester: 'Fall 2024' },
      ],
    }

    return NextResponse.json(
      {
        success: true,
        data: mockGrades,
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
