'use client'

import { useState, useEffect } from 'react'
import { apiClient } from '@/lib/api'
import { formatDateTime } from '@/lib/utils'

interface Notification {
  id: string
  title: string
  message: string
  type: 'grade' | 'attendance' | 'event' | 'general'
  isRead: boolean
  createdAt: string
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [filter, setFilter] = useState<'all' | 'unread'>('all')

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await apiClient.getNotifications({
          unreadOnly: filter === 'unread',
        })
        if (response.data) {
          setNotifications(response.data)
        }
      } catch (err: any) {
        setError(err.message || 'Failed to load notifications')
      } finally {
        setIsLoading(false)
      }
    }

    fetchNotifications()
  }, [filter])

  const handleMarkAsRead = async (id: string) => {
    try {
      await apiClient.markNotificationAsRead(id)
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
      )
    } catch (err: any) {
      setError('Failed to mark as read')
    }
  }

  const typeIcons = {
    grade: '📚',
    attendance: '📅',
    event: '🎉',
    general: '📢',
  }

  const typeColors = {
    grade: 'bg-blue-100 text-blue-700',
    attendance: 'bg-yellow-100 text-yellow-700',
    event: 'bg-green-100 text-green-700',
    general: 'bg-gray-100 text-gray-700',
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Bildirimler</h1>
          <p className="text-gray-600 mt-2">Okul ve öğrenci hakkında tüm bildirimler</p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              filter === 'all'
                ? 'bg-primary-600 text-white'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            Tümü
          </button>
          <button
            onClick={() => setFilter('unread')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              filter === 'unread'
                ? 'bg-primary-600 text-white'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            Okunmamış
          </button>
        </div>
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
      ) : notifications.length > 0 ? (
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg border transition ${
                notification.isRead
                  ? 'bg-gray-50 border-gray-200'
                  : 'bg-blue-50 border-blue-200'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl">{typeIcons[notification.type]}</div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3
                        className={`font-semibold ${
                          notification.isRead ? 'text-gray-900' : 'text-primary-900'
                        }`}
                      >
                        {notification.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {notification.message}
                      </p>
                      <p className="text-gray-500 text-xs mt-2">
                        {formatDateTime(notification.createdAt)}
                      </p>
                    </div>

                    {!notification.isRead && (
                      <button
                        onClick={() => handleMarkAsRead(notification.id)}
                        className="px-3 py-1 text-xs font-semibold bg-primary-600 text-white rounded hover:bg-primary-700"
                      >
                        Oku
                      </button>
                    )}
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <span
                      className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                        typeColors[notification.type]
                      }`}
                    >
                      {notification.type === 'grade' && 'Not'}
                      {notification.type === 'attendance' && 'Devamsızlık'}
                      {notification.type === 'event' && 'Etkinlik'}
                      {notification.type === 'general' && 'Genel'}
                    </span>

                    {!notification.isRead && (
                      <span className="w-3 h-3 bg-primary-600 rounded-full"></span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">Bildirim bulunamadı</p>
        </div>
      )}
    </div>
  )
}
