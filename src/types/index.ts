// User Types
export interface User {
  id: string
  email: string
  fullName: string
  role: 'admin' | 'parent' | 'teacher'
  avatarUrl?: string
  isActive: boolean
  createdAt: Date
  lastLogin?: Date
}

export interface Session {
  id: string
  userId: string
  token: string
  expiresAt: Date
}

// Blog Types
export interface Post {
  id: string
  title: string
  slug: string
  content: string
  excerpt?: string
  featuredImageUrl?: string
  authorId: string
  categoryId?: string
  status: 'draft' | 'published' | 'archived'
  publishedAt?: Date
  viewCount: number
  createdAt: Date
  updatedAt: Date
  seoTitle?: string
  seoDescription?: string
  seoKeywords?: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  createdAt: Date
}

export interface Tag {
  id: string
  name: string
  slug: string
  createdAt: Date
}

export interface Comment {
  id: string
  postId: string
  authorName: string
  authorEmail: string
  content: string
  isApproved: boolean
  createdAt: Date
}

// Media Types
export interface Media {
  id: string
  filename: string
  fileUrl: string
  fileSize?: number
  mimeType?: string
  type: 'image' | 'video' | 'document'
  uploadedById: string
  createdAt: Date
}

export interface Gallery {
  id: string
  title: string
  description?: string
  createdAt: Date
  updatedAt: Date
}

export interface GalleryItem {
  id: string
  galleryId: string
  mediaId: string
  caption?: string
  orderIndex: number
  createdAt: Date
}

// Social Media Types
export interface SocialPost {
  id: string
  content: string
  status: 'draft' | 'scheduled' | 'published'
  scheduledAt?: Date
  publishedAt?: Date
  createdById: string
  createdAt: Date
  updatedAt: Date
}

export interface SocialPlatform {
  id: string
  socialPostId: string
  platform: 'facebook' | 'instagram' | 'twitter' | 'linkedin'
  platformPostId?: string
  reach: number
  engagement: number
  createdAt: Date
}

// Student & Parent Types
export interface Student {
  id: string
  firstName: string
  lastName: string
  gradeLevel: number
  class: string
  parentId: string
  registrationNumber?: string
  dateOfBirth?: Date
  photoUrl?: string
  createdAt: Date
}

export interface Grade {
  id: string
  studentId: string
  subject: string
  grade: number
  semester: string
  academicYear: string
  comments?: string
  createdAt: Date
  updatedAt: Date
}

export interface Attendance {
  id: string
  studentId: string
  date: Date
  status: 'present' | 'absent' | 'late' | 'excused'
  reason?: string
  notes?: string
  createdAt: Date
}

export interface AcademicEvent {
  id: string
  title: string
  description?: string
  eventType: 'holiday' | 'exam' | 'event' | 'deadline'
  startDate: Date
  endDate?: Date
  location?: string
  createdAt: Date
  updatedAt: Date
}

export interface Notification {
  id: string
  userId: string
  title: string
  message: string
  type: 'grade' | 'attendance' | 'event' | 'general'
  isRead: boolean
  readAt?: Date
  createdAt: Date
}

export interface Message {
  id: string
  senderId: string
  recipientId: string
  subject?: string
  content: string
  isRead: boolean
  readAt?: Date
  createdAt: Date
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
  details?: Record<string, any>
}

export interface PaginatedResponse<T> {
  success: boolean
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

// Auth Types
export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  token: string
  user: User
  expiresIn: number
}

export interface RegisterRequest {
  email: string
  password: string
  fullName: string
  role: 'parent' | 'teacher'
}

// Form Types
export interface CreatePostForm {
  title: string
  content: string
  excerpt?: string
  categoryId?: string
  status: 'draft' | 'published'
  featuredImageUrl?: string
  seoTitle?: string
  seoDescription?: string
}

export interface CreateGradeForm {
  subject: string
  grade: number
  semester: string
  academicYear: string
  comments?: string
}

// Filter Types
export interface PostFilters {
  status?: 'published' | 'draft'
  categoryId?: string
  page?: number
  limit?: number
  search?: string
}

export interface MediaFilters {
  type?: 'image' | 'video' | 'document'
  limit?: number
  offset?: number
}

export interface StudentFilters {
  parentId: string
  gradeLevel?: number
}
