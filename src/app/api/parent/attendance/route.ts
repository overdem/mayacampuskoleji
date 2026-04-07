import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const mockAttendance = {
      studentName: 'Ahmet Yılmaz',
      attendancePercentage: 95,
      presentDays: 38,
      absentDays: 2,
      lateDays: 1,
      excusedDays: 0,
      records: [
        { date: '2024-12-20', status: 'present' },
        { date: '2024-12-19', status: 'present' },
        { date: '2024-12-18', status: 'late', reason: 'Trafik' },
        { date: '2024-12-17', status: 'absent', reason: 'Hasta' },
        { date: '2024-12-16', status: 'present' },
        { date: '2024-12-15', status: 'present' },
      ],
    }

    return NextResponse.json(
      {
        success: true,
        data: mockAttendance,
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
