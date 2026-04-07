'use client'

import { useState, useEffect } from 'react'
import { apiClient } from '@/lib/api'

interface CalendarEvent {
  id: string
  title: string
  description?: string
  startDate: string
  endDate?: string
  eventType: 'holiday' | 'exam' | 'event' | 'deadline'
  location?: string
}

export default function CalendarPage() {
  const [events, setEvents] = useState<CalendarEvent[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  useEffect(() => {
    const fetchCalendar = async () => {
      try {
        const response = await apiClient.getCalendar()
        if (response.data) {
          setEvents(response.data)
        }
      } catch (err: any) {
        setError(err.message || 'Failed to load calendar')
      } finally {
        setIsLoading(false)
      }
    }

    fetchCalendar()
  }, [])

  const eventTypeColors = {
    holiday: 'bg-blue-100 text-blue-700',
    exam: 'bg-red-100 text-red-700',
    event: 'bg-green-100 text-green-700',
    deadline: 'bg-yellow-100 text-yellow-700',
  }

  const eventTypeIcons = {
    holiday: '🏖️',
    exam: '📝',
    event: '🎉',
    deadline: '⏰',
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Akademik Takvim</h1>
        <p className="text-gray-600 mt-2">Okul etkinlikleri ve önemli tarihleri takip edin</p>
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
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {/* Timeline */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Yaklaşan Etkinlikler</h2>

              {events.length > 0 ? (
                <div className="space-y-4">
                  {events.map((event) => (
                    <div
                      key={event.id}
                      onClick={() => setSelectedEvent(event)}
                      className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{eventTypeIcons[event.eventType]}</div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900">{event.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {event.startDate}
                            {event.endDate && ` - ${event.endDate}`}
                          </p>
                          {event.location && (
                            <p className="text-sm text-gray-500 mt-1">📍 {event.location}</p>
                          )}
                          <span
                            className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${
                              eventTypeColors[event.eventType]
                            }`}
                          >
                            {event.eventType === 'holiday' && 'Tatil'}
                            {event.eventType === 'exam' && 'Sınav'}
                            {event.eventType === 'event' && 'Etkinlik'}
                            {event.eventType === 'deadline' && 'Son Tarih'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">Etkinlik bulunamadı</p>
              )}
            </div>
          </div>

          {/* Event Details */}
          <div>
            <div className="bg-white rounded-lg shadow p-6 sticky top-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Etkinlik Detayları</h3>

              {selectedEvent ? (
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase">Başlık</p>
                    <p className="text-gray-900 font-semibold mt-1">{selectedEvent.title}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase">Tarih</p>
                    <p className="text-gray-900 mt-1">{selectedEvent.startDate}</p>
                  </div>

                  {selectedEvent.endDate && (
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase">Bitiş</p>
                      <p className="text-gray-900 mt-1">{selectedEvent.endDate}</p>
                    </div>
                  )}

                  {selectedEvent.location && (
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase">Yer</p>
                      <p className="text-gray-900 mt-1">{selectedEvent.location}</p>
                    </div>
                  )}

                  {selectedEvent.description && (
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase">Açıklama</p>
                      <p className="text-gray-900 mt-1 text-sm">{selectedEvent.description}</p>
                    </div>
                  )}

                  <div className="pt-4">
                    <span
                      className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                        eventTypeColors[selectedEvent.eventType]
                      }`}
                    >
                      {selectedEvent.eventType === 'holiday' && '🏖️ Tatil'}
                      {selectedEvent.eventType === 'exam' && '📝 Sınav'}
                      {selectedEvent.eventType === 'event' && '🎉 Etkinlik'}
                      {selectedEvent.eventType === 'deadline' && '⏰ Son Tarih'}
                    </span>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">
                  Bir etkinlik seçin
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
