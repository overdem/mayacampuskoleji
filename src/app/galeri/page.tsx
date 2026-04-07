'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { apiClient } from '@/lib/api'

interface GalleryItem {
  id: string
  image: string
  caption?: string
}

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await apiClient.getMedia({ type: 'image', limit: 50 })
        if (response.data) {
          setItems(
            response.data.map((item: any) => ({
              id: item.id,
              image: item.fileUrl,
              caption: item.filename,
            }))
          )
        }
      } catch (err: any) {
        setError(err.message || 'Failed to load gallery')
      } finally {
        setIsLoading(false)
      }
    }

    fetchGallery()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Galeri</h1>
          <p className="text-lg opacity-90">Okul etkinlikleri ve anılarından fotoğrafları keşfedin</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 mb-8">
            {error}
          </div>
        )}

        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin">Yükleniyor...</div>
          </div>
        ) : items.length > 0 ? (
          <>
            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className="relative overflow-hidden rounded-lg cursor-pointer group bg-gray-200 aspect-square"
                >
                  <img
                    src={item.image}
                    alt={item.caption || 'Gallery image'}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
              <div
                className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedImage(null)}
              >
                <div
                  className="relative max-w-4xl w-full max-h-96 md:max-h-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl"
                  >
                    ✕
                  </button>

                  {/* Image */}
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.caption || 'Gallery image'}
                    className="w-full h-full object-contain"
                  />

                  {/* Caption */}
                  {selectedImage.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                      <p>{selectedImage.caption}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Fotoğraf bulunamadı</p>
          </div>
        )}
      </div>
    </div>
  )
}
