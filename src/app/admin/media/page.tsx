'use client'

import { useState, useEffect } from 'react'
import { apiClient } from '@/lib/api'
import { Button } from '@/components/shared/Button'
import { formatFileSize } from '@/lib/utils'

interface MediaItem {
  id: string
  filename: string
  fileUrl: string
  fileSize?: number
  mimeType?: string
  type: string
}

export default function MediaManagerPage() {
  const [media, setMedia] = useState<MediaItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [dragActive, setDragActive] = useState(false)

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await apiClient.getMedia({ limit: 100 })
        if (response.data) {
          setMedia(response.data)
        }
      } catch (err: any) {
        setError(err.message || 'Failed to load media')
      } finally {
        setIsLoading(false)
      }
    }

    fetchMedia()
  }, [])

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const files = e.dataTransfer.files
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      try {
        const response = await apiClient.uploadMedia(file)
        if (response.data) {
          setMedia((prev) => [response.data, ...prev])
        }
      } catch (err: any) {
        setError(`Failed to upload ${file.name}`)
      }
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Medya Kütüphanesi</h2>
        <p className="text-gray-600 mt-1">Resimleri ve videoları yönet</p>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      {/* Upload Area */}
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-lg p-12 text-center transition ${
          dragActive ? 'border-primary-500 bg-primary-50' : 'border-gray-300'
        }`}
      >
        <div className="text-5xl mb-4">📸</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Dosyaları Buraya Sürükleyin
        </h3>
        <p className="text-gray-600 mb-4">veya</p>
        <Button variant="primary">Dosya Seçin</Button>
      </div>

      {/* Media Grid */}
      {isLoading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin">Yükleniyor...</div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {media.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow p-4 group">
              {/* Thumbnail */}
              <div className="relative h-40 bg-gray-200 rounded-lg overflow-hidden mb-4">
                {item.type === 'image' ? (
                  <img
                    src={item.fileUrl}
                    alt={item.filename}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-300 text-3xl">
                    📹
                  </div>
                )}

                {/* Actions Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                  <Button variant="ghost" size="sm">
                    👁️
                  </Button>
                  <Button variant="danger" size="sm">
                    🗑️
                  </Button>
                </div>
              </div>

              {/* Info */}
              <p className="font-semibold text-gray-900 text-sm truncate">
                {item.filename}
              </p>
              {item.fileSize && (
                <p className="text-gray-600 text-xs mt-1">
                  {formatFileSize(item.fileSize)}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {media.length === 0 && !isLoading && (
        <div className="text-center py-12">
          <p className="text-gray-600">Henüz medya yüklenmedi</p>
        </div>
      )}
    </div>
  )
}
