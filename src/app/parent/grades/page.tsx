'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { apiClient } from '@/lib/api'

interface Grade {
  subject: string
  grade: number
  percentage: number
  semester: string
  comments?: string
}

interface GradesData {
  studentName: string
  gpa: number
  average: number
  semester: string
  grades: Grade[]
}

export default function GradesPage() {
  const searchParams = useSearchParams()
  const studentId = searchParams.get('student') || ''
  const [data, setData] = useState<GradesData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!studentId) return

    const fetchGrades = async () => {
      try {
        const response = await apiClient.getGrades(studentId)
        if (response.data) {
          setData(response.data)
        }
      } catch (err: any) {
        setError(err.message || 'Failed to load grades')
      } finally {
        setIsLoading(false)
      }
    }

    fetchGrades()
  }, [studentId])

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Notlar</h1>
        <p className="text-gray-600 mt-2">Öğrenci not bilgileri ve analizi</p>
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

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-primary-50 rounded-lg p-4">
                <p className="text-gray-600 text-sm">Not Ortalaması</p>
                <p className="text-4xl font-bold text-primary-600 mt-2">{data.average.toFixed(1)}</p>
              </div>
              <div className="bg-secondary-50 rounded-lg p-4">
                <p className="text-gray-600 text-sm">GPA</p>
                <p className="text-4xl font-bold text-secondary-600 mt-2">{data.gpa.toFixed(2)}</p>
              </div>
              <div className="bg-accent-50 rounded-lg p-4">
                <p className="text-gray-600 text-sm">Dönem</p>
                <p className="text-2xl font-bold text-accent-600 mt-2">{data.semester}</p>
              </div>
            </div>
          </div>

          {/* Grades Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-900">Ders Notları</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Ders</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Not</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Yüzde</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Açıklamalar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.grades.map((grade, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-900 font-medium">{grade.subject}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full font-semibold ${
                            grade.grade >= 85
                              ? 'bg-green-100 text-green-700'
                              : grade.grade >= 70
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {grade.grade}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{grade.percentage}%</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{grade.comments || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">Not bilgisi bulunamadı</p>
        </div>
      )}
    </div>
  )
}
