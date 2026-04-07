'use client'

import { useState, useEffect } from 'react'
import { apiClient } from '@/lib/api'
import { formatDateTime } from '@/lib/utils'
import { Button } from '@/components/shared/Button'

interface Message {
  id: string
  senderId: string
  senderName: string
  subject: string
  content: string
  createdAt: string
  isRead: boolean
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [replyContent, setReplyContent] = useState('')
  const [isSending, setIsSending] = useState(false)

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await apiClient.getMessages()
        if (response.data) {
          setMessages(response.data)
        }
      } catch (err: any) {
        setError(err.message || 'Failed to load messages')
      } finally {
        setIsLoading(false)
      }
    }

    fetchMessages()
  }, [])

  const handleSendReply = async () => {
    if (!replyContent.trim() || !selectedMessage) return

    setIsSending(true)
    try {
      await apiClient.sendMessage({
        recipientId: selectedMessage.senderId,
        subject: `Re: ${selectedMessage.subject}`,
        content: replyContent,
      })
      setReplyContent('')
      // Refresh messages
      const response = await apiClient.getMessages()
      if (response.data) {
        setMessages(response.data)
      }
    } catch (err: any) {
      setError('Failed to send message')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Mesajlar</h1>
        <p className="text-gray-600 mt-2">Öğretmenler ve okul idaresi ile iletişim kurun</p>
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
        <div className="grid md:grid-cols-3 gap-6 h-96">
          {/* Messages List */}
          <div className="md:col-span-1 bg-white rounded-lg shadow overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <h3 className="font-bold text-gray-900">Konuşmalar</h3>
            </div>

            <div className="flex-1 overflow-y-auto">
              {messages.length > 0 ? (
                <div className="divide-y divide-gray-200">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      onClick={() => setSelectedMessage(message)}
                      className={`p-4 cursor-pointer hover:bg-gray-50 transition ${
                        selectedMessage?.id === message.id ? 'bg-primary-50' : ''
                      } ${!message.isRead ? 'bg-blue-50' : ''}`}
                    >
                      <p className="font-semibold text-gray-900 text-sm truncate">
                        {message.senderName}
                      </p>
                      <p className="text-gray-600 text-xs truncate mt-1">
                        {message.subject}
                      </p>
                      <p className="text-gray-500 text-xs mt-2">
                        {formatDateTime(message.createdAt)}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-gray-500">
                  <p>Mesaj bulunamadı</p>
                </div>
              )}
            </div>
          </div>

          {/* Message Detail */}
          <div className="md:col-span-2 bg-white rounded-lg shadow overflow-hidden flex flex-col">
            {selectedMessage ? (
              <>
                {/* Message Header */}
                <div className="p-6 border-b border-gray-200 bg-gray-50">
                  <p className="text-sm text-gray-500">Gönderici</p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-1">
                    {selectedMessage.senderName}
                  </h3>
                  <p className="text-gray-600 mt-2">{selectedMessage.subject}</p>
                  <p className="text-gray-500 text-sm mt-2">
                    {formatDateTime(selectedMessage.createdAt)}
                  </p>
                </div>

                {/* Message Content */}
                <div className="flex-1 p-6 overflow-y-auto">
                  <div className="prose prose-sm max-w-none">
                    <p className="text-gray-700 whitespace-pre-wrap">
                      {selectedMessage.content}
                    </p>
                  </div>
                </div>

                {/* Reply Area */}
                <div className="p-6 border-t border-gray-200 bg-gray-50">
                  <textarea
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    placeholder="Yanıt yazın..."
                    className="w-full h-24 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                  />
                  <div className="flex justify-end gap-2 mt-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setSelectedMessage(null)}
                    >
                      Kapat
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      isLoading={isSending}
                      onClick={handleSendReply}
                      disabled={!replyContent.trim()}
                    >
                      Gönder
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">Bir mesaj seçin</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
