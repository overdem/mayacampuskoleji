import { NextRequest, NextResponse } from 'next/server'

// Mock students
const mockStudents = [
  {
    id: '1',
    firstName: 'Ahmet',
    lastName: 'Yılmaz',
    gradeLevel: 9,
    class: '9-A',
    registrationNumber: '2024001',
    photoUrl: 'https://via.placeholder.com/200',
    parentId: '2',
    createdAt: new Date().toISOString(),
  },
]

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(
      {
        success: true,
        data: mockStudents,
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
