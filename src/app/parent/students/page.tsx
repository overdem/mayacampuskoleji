'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { apiClient } from '@/lib/api'
import { Button } from '@/components/shared/Button'

interface Student {
  id: string
  firstName: string
  lastName: string
  gradeLevel: number
  class: string
  photoUrl?: string
}

export default function StudentSelectorPage() {
  const [students, setStudents] = useState<Student[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await apiClient.getStudents()
        if (response.data) {
          setStudents(response.data)
        }
      } catch (err: any) {
        setError(err.message || 'Failed to load students')
      } finally {
        setIsLoading(false)
      }
    }

    fetchStudents()
  }, [])

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Öğrencilerim</h1>
        <p className="text-gray-600 mt-2">Bilgilerini görmek istediğiniz öğrenci seçin</p>
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
      ) : students.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            <Link key={student.id} href={`/parent/grades?student=${student.id}`}>
              <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 cursor-pointer">
                <div className="text-center">
                  {student.photoUrl ? (
                    <img
                      src={student.photoUrl}
                      alt={student.firstName}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-secondary-100 flex items-center justify-center text-4xl">
                      👦
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-gray-900">
                    {student.firstName} {student.lastName}
                  </h3>

                  <div className="mt-4 space-y-2 text-gray-600">
                    <p className="text-sm">Sınıf: <span className="font-semibold">{student.class}</span></p>
                    <p className="text-sm">Seviye: <span className="font-semibold">{student.gradeLevel}. Sınıf</span></p>
                  </div>

                  <Button variant="secondary" size="sm" className="w-full mt-6">
                    Bilgilerini Gör →
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">Öğrenci bulunamadı</p>
        </div>
      )}
    </div>
  )
}
