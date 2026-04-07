import axios, { AxiosInstance, AxiosError } from 'axios'
import type { ApiResponse, PaginatedResponse } from '@/types'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

// Create axios instance
const api: AxiosInstance = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
})

// Handle errors
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token')
        window.location.href = '/admin/login'
      }
    }
    return Promise.reject(error)
  }
)

// API client methods
export const apiClient = {
  // Auth
  login: async (email: string, password: string) => {
    const { data } = await api.post('/auth/login', { email, password })
    return data as ApiResponse<{ token: string; user: any }>
  },

  logout: async () => {
    return api.post('/auth/logout')
  },

  register: async (payload: any) => {
    const { data } = await api.post('/auth/register', payload)
    return data as ApiResponse
  },

  // Blog Posts
  getPosts: async (filters?: any) => {
    const { data } = await api.get('/blog/posts', { params: filters })
    return data as PaginatedResponse<any>
  },

  getPost: async (id: string) => {
    const { data } = await api.get(`/blog/posts/${id}`)
    return data as ApiResponse<any>
  },

  createPost: async (payload: any) => {
    const { data } = await api.post('/blog/posts', payload)
    return data as ApiResponse<any>
  },

  updatePost: async (id: string, payload: any) => {
    const { data } = await api.put(`/blog/posts/${id}`, payload)
    return data as ApiResponse<any>
  },

  deletePost: async (id: string) => {
    return api.delete(`/blog/posts/${id}`)
  },

  // Categories
  getCategories: async () => {
    const { data } = await api.get('/blog/categories')
    return data as ApiResponse<any[]>
  },

  // Tags
  getTags: async () => {
    const { data } = await api.get('/blog/tags')
    return data as ApiResponse<any[]>
  },

  // Search
  searchPosts: async (query: string) => {
    const { data } = await api.get('/blog/search', { params: { q: query } })
    return data as PaginatedResponse<any>
  },

  // Media
  getMedia: async (filters?: any) => {
    const { data } = await api.get('/media', { params: filters })
    return data as PaginatedResponse<any>
  },

  uploadMedia: async (file: File) => {
    const formData = new FormData()
    formData.append('file', file)
    const { data } = await api.post('/media/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return data as ApiResponse<any>
  },

  deleteMedia: async (id: string) => {
    return api.delete(`/media/${id}`)
  },

  // Galleries
  getGalleries: async () => {
    const { data } = await api.get('/media/galleries')
    return data as ApiResponse<any[]>
  },

  getGallery: async (id: string) => {
    const { data } = await api.get(`/media/galleries/${id}`)
    return data as ApiResponse<any>
  },

  // Social
  getSocialPosts: async (filters?: any) => {
    const { data } = await api.get('/social/posts', { params: filters })
    return data as PaginatedResponse<any>
  },

  createSocialPost: async (payload: any) => {
    const { data } = await api.post('/social/posts', payload)
    return data as ApiResponse<any>
  },

  publishSocialPost: async (postId: string) => {
    const { data } = await api.post('/social/publish', { postId })
    return data as ApiResponse<any>
  },

  getSocialAnalytics: async (params?: any) => {
    const { data } = await api.get('/social/analytics', { params })
    return data as ApiResponse<any>
  },

  // Parent Portal - Students
  getStudents: async () => {
    const { data } = await api.get('/parent/students')
    return data as ApiResponse<any[]>
  },

  // Parent Portal - Grades
  getGrades: async (studentId: string, filters?: any) => {
    const { data } = await api.get(`/parent/grades/${studentId}`, { params: filters })
    return data as ApiResponse<any>
  },

  // Parent Portal - Attendance
  getAttendance: async (studentId: string, params?: any) => {
    const { data } = await api.get('/parent/attendance', {
      params: { studentId, ...params },
    })
    return data as ApiResponse<any>
  },

  // Parent Portal - Calendar
  getCalendar: async () => {
    const { data } = await api.get('/parent/calendar')
    return data as ApiResponse<any[]>
  },

  // Parent Portal - Notifications
  getNotifications: async (params?: any) => {
    const { data } = await api.get('/parent/notifications', { params })
    return data as ApiResponse<any[]>
  },

  markNotificationAsRead: async (notificationId: string) => {
    return api.put(`/parent/notifications/${notificationId}/read`)
  },

  // Parent Portal - Messages
  getMessages: async (conversationId?: string) => {
    const { data } = await api.get('/parent/messages', {
      params: { conversationId },
    })
    return data as ApiResponse<any[]>
  },

  sendMessage: async (payload: any) => {
    const { data } = await api.post('/parent/messages', payload)
    return data as ApiResponse<any>
  },

  // Admin
  getDashboard: async () => {
    const { data } = await api.get('/admin/dashboard')
    return data as ApiResponse<any>
  },

  getAnalytics: async (params?: any) => {
    const { data } = await api.get('/admin/analytics', { params })
    return data as ApiResponse<any>
  },

  getUsers: async (params?: any) => {
    const { data } = await api.get('/admin/users', { params })
    return data as PaginatedResponse<any>
  },

  // Health check
  healthCheck: async () => {
    const { data } = await api.get('/health')
    return data as ApiResponse
  },
}

export default api
