# Campus Maya - API Routes Structure

## Directory Layout

```
src/app/api/
├── auth/
│   ├── login/route.ts          # POST /api/auth/login
│   ├── logout/route.ts         # POST /api/auth/logout
│   ├── register/route.ts       # POST /api/auth/register
│   ├── refresh/route.ts        # POST /api/auth/refresh
│   └── verify-email/route.ts   # POST /api/auth/verify-email
│
├── blog/
│   ├── posts/
│   │   ├── route.ts            # GET /api/blog/posts, POST /api/blog/posts
│   │   └── [id]/
│   │       ├── route.ts        # GET, PUT, DELETE /api/blog/posts/[id]
│   │       └── comments/route.ts # GET, POST /api/blog/posts/[id]/comments
│   ├── categories/route.ts     # GET, POST /api/blog/categories
│   ├── tags/route.ts           # GET, POST /api/blog/tags
│   └── search/route.ts         # GET /api/blog/search?q=...
│
├── media/
│   ├── route.ts                # GET, POST /api/media
│   ├── [id]/route.ts           # GET, DELETE /api/media/[id]
│   ├── upload/route.ts         # POST /api/media/upload (multipart)
│   └── galleries/
│       ├── route.ts            # GET, POST /api/media/galleries
│       └── [id]/route.ts       # GET, PUT, DELETE /api/media/galleries/[id]
│
├── social/
│   ├── posts/
│   │   ├── route.ts            # GET, POST /api/social/posts
│   │   └── [id]/route.ts       # GET, PUT, DELETE /api/social/posts/[id]
│   ├── publish/route.ts        # POST /api/social/publish
│   ├── analytics/route.ts      # GET /api/social/analytics
│   └── schedule/route.ts       # POST /api/social/schedule
│
├── parent/
│   ├── students/route.ts       # GET /api/parent/students
│   ├── grades/
│   │   ├── route.ts            # GET /api/parent/grades
│   │   └── [studentId]/route.ts # GET /api/parent/grades/[studentId]
│   ├── attendance/route.ts     # GET /api/parent/attendance
│   ├── calendar/route.ts       # GET /api/parent/calendar
│   ├── notifications/route.ts  # GET /api/parent/notifications
│   └── messages/
│       ├── route.ts            # GET, POST /api/parent/messages
│       └── [id]/route.ts       # GET /api/parent/messages/[id]
│
├── admin/
│   ├── dashboard/route.ts      # GET /api/admin/dashboard
│   ├── analytics/route.ts      # GET /api/admin/analytics
│   └── users/route.ts          # GET, POST /api/admin/users
│
└── health/route.ts             # GET /api/health
```

## Core API Endpoints

### Authentication

```
POST /api/auth/login
{
  "email": "admin@campus.com",
  "password": "***"
}
Response: { token, user, expiresIn }

POST /api/auth/logout
Headers: { Authorization: "Bearer token" }

POST /api/auth/register
{
  "email": "parent@campus.com",
  "password": "***",
  "fullName": "Parent Name",
  "role": "parent"
}
Response: { userId, email }

POST /api/auth/refresh
Headers: { Authorization: "Bearer refreshToken" }
Response: { token, expiresIn }
```

### Blog Posts

```
GET /api/blog/posts
Query: ?status=published&category=news&page=1&limit=10
Response: { posts[], total, page, limit }

GET /api/blog/posts/[id]
Response: { post }

POST /api/blog/posts
Headers: { Authorization: "Bearer token" }
{
  "title": "...",
  "content": "...",
  "excerpt": "...",
  "categoryId": "...",
  "status": "draft|published",
  "featuredImageUrl": "..."
}
Response: { post }

PUT /api/blog/posts/[id]
Headers: { Authorization: "Bearer token" }
{...updates}
Response: { post }

DELETE /api/blog/posts/[id]
Headers: { Authorization: "Bearer token" }
Response: { success: true }
```

### Media

```
POST /api/media/upload
Headers: { Authorization: "Bearer token", Content-Type: "multipart/form-data" }
Body: FormData { file }
Response: { media { id, fileUrl, fileName, mimeType, fileSize } }

GET /api/media
Query: ?type=image&limit=20
Response: { media[] }

DELETE /api/media/[id]
Headers: { Authorization: "Bearer token" }
Response: { success: true }
```

### Social Media

```
GET /api/social/posts
Query: ?status=published&limit=20
Response: { posts[] }

POST /api/social/posts
Headers: { Authorization: "Bearer token" }
{
  "content": "...",
  "platforms": ["facebook", "instagram"],
  "mediaIds": ["..."],
  "scheduleAt": "2026-04-08T10:00:00Z"
}
Response: { post }

POST /api/social/publish
Headers: { Authorization: "Bearer token" }
{ "postId": "..." }
Response: { published, results { platform, success, postId } }

GET /api/social/analytics
Query: ?from=2026-04-01&to=2026-04-07
Response: { reach, engagement, impressions, by_platform[] }
```

### Parent Portal

```
GET /api/parent/students
Headers: { Authorization: "Bearer token" }
Response: { students[] }

GET /api/parent/grades/[studentId]
Headers: { Authorization: "Bearer token" }
Query: ?semester=fall2025
Response: { grades[], gpa, average }

GET /api/parent/attendance
Headers: { Authorization: "Bearer token" }
Query: ?studentId=...
Response: { attendanceRecords[], stats { present, absent, late } }

GET /api/parent/calendar
Response: { events[] { title, date, type } }

GET /api/parent/notifications
Headers: { Authorization: "Bearer token" }
Query: ?unreadOnly=true
Response: { notifications[], unreadCount }

GET /api/parent/messages
Headers: { Authorization: "Bearer token" }
Query: ?conversationId=...
Response: { messages[] }

POST /api/parent/messages
Headers: { Authorization: "Bearer token" }
{
  "recipientId": "...",
  "subject": "...",
  "content": "..."
}
Response: { message }
```

### Admin

```
GET /api/admin/dashboard
Headers: { Authorization: "Bearer adminToken" }
Response: {
  stats: { totalPosts, totalUsers, totalStudents },
  recentActivity: [],
  socialMetrics: {}
}

GET /api/admin/analytics
Query: ?from=...&to=...
Response: { metrics, charts }

GET /api/admin/users
Headers: { Authorization: "Bearer adminToken" }
Response: { users[] }
```

## Response Format

All responses follow a consistent format:

```typescript
// Success (2xx)
{
  success: true,
  data: {...},
  message?: "Operation completed"
}

// Client Error (4xx)
{
  success: false,
  error: "INVALID_INPUT",
  message: "Email is required",
  details?: {...}
}

// Server Error (5xx)
{
  success: false,
  error: "INTERNAL_ERROR",
  message: "An unexpected error occurred"
}
```

## Error Codes

```
INVALID_INPUT        - 400
UNAUTHORIZED         - 401
FORBIDDEN            - 403
NOT_FOUND            - 404
CONFLICT             - 409
VALIDATION_ERROR     - 422
INTERNAL_ERROR       - 500
SERVICE_UNAVAILABLE  - 503
```

## Pagination

```
Query Parameters:
  ?page=1&limit=20&sortBy=created_at&order=desc

Response:
{
  data: [...],
  pagination: {
    page: 1,
    limit: 20,
    total: 150,
    totalPages: 8,
    hasNext: true,
    hasPrev: false
  }
}
```

## Authentication

All protected routes require:
```
Headers: {
  Authorization: "Bearer {token}"
}
```

Token format: JWT containing `{ userId, role, email, expiresAt }`

## Rate Limiting

- Auth endpoints: 5 requests per minute per IP
- API endpoints: 100 requests per minute per user
- Media upload: 10 requests per minute per user

## Caching

- GET /api/blog/posts: 5 minutes
- GET /api/blog/posts/[id]: 10 minutes
- GET /api/media: 5 minutes
- GET /api/social/analytics: 1 hour
- GET /api/parent/grades: real-time (no cache)
- GET /api/parent/attendance: 15 minutes

## File Upload

Maximum file sizes:
- Image: 5MB
- Video: 50MB
- Document: 10MB

Allowed MIME types:
- Images: image/jpeg, image/png, image/webp, image/gif
- Videos: video/mp4, video/webm
- Documents: application/pdf
