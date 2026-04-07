'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { apiClient } from '@/lib/api'

interface AttendanceDay {
  date: string
  status: 'present' | 'absent' | 'late' | 'excused'
  reason?: string
}

interface AttendanceData {
  studentName: string
  attendancePercentage: number
  presentDays: number
  absentDays: number
  lateDays: number
  excusedDays: number
  records: AttendanceDay[]
}

export default function AttendancePage() {
  const searchParams = useSearchParams()
  const studentId = searchParams.get('student') || ''
  const [data, setData] = useState<AttendanceData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!studentId) return

    const fetchAttendance = async () => {
      try {
        const response = await apiClient.getAttendance(studentId)
        if (response.data) {
          setData(response.data)
        }
      } catch (err: any) {
        setError(err.message || 'Failed to load attendance')
      } finally {
        setIsLoading(false)
      }
    }

    fetchAttendance()
  }, [studentId])

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Devamsızlık</h1>
        <p className="text-gray-600 mt-2">Öğrenci devamsızlık takibi</p>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      {isLoading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin">Yükleniyor...</div>
        </div>
      ) : data ? (
        <>
          {/* Student & Stats */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{data.studentName}</h2>

            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-gray-600 text-sm">Devam</p>
                <p className="text-3xl font-bold text-green-600 mt-2">{data.presentDays}</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <p className="text-gray-600 text-sm">Devamsız</p>
                <p className="text-3xl font-bold text-red-600 mt-2">{data.absentDays}</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <p className="text-gray-600 text-sm">Geç Kaldı</p>
                <p className="text-3xl font-bold text-yellow-600 mt-2">{data.lateDays}</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-gray-600 text-sm">Devam %</p>
                <p className="text-3xl font-bold text-blue-600 mt-2">{data.attendancePercentage}%</p>
              </div>
            </div>
          </div>

          {/* Attendance Records */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-900">Devamsızlık Kaydı</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Tarih</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Durum</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Neden</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.records.slice(0, 20).map((record, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-900 font-medium">{record.date}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full font-semibold text-sm ${
                            record.status === 'present'
                              ? 'bg-green-100 text-green-700'
                              : record.status === 'absent'
                                ? 'bg-red-100 text-red-700'
                                : record.status === 'late'
                                  ? 'bg-yellow-100 text-yellow-700'
                                  : 'bg-blue-100 text-blue-700'
                          }`}
                        >
                          {record.status === 'present' && '✓ Devamı'}
                          {record.status === 'absent' && '✗ Devamsız'}
                          {record.status === 'late' && '⏰ Geç Kaldı'}
                          {record.status === 'excused' && '📝 İzinli'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{record.reason || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">Devamsızlık bilgisi bulunamadı</p>
        </div>
      )}
    </div>
  )
}
