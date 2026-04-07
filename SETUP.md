# Campus Maya - Setup & Getting Started Guide

## Prerequisites

- Node.js 18.17+ (recommended 20 LTS)
- npm or pnpm
- PostgreSQL 14+
- Git

## Quick Start (5 minutes)

### 1. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 2. Setup Environment Variables
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration.

### 3. Setup Database
```bash
# Create database
createdb campus_maya_dev

# Run migrations
npm run db:migrate

# Seed demo data (optional)
npm run db:seed
```

### 4. Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
campus-maya/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Auth pages
│   │   ├── (blog)/            # Blog module
│   │   ├── admin/             # Admin panel
│   │   ├── parent/            # Parent portal
│   │   ├── api/               # API routes
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   │
│   ├── components/
│   │   ├── shared/            # Reusable UI components
│   │   ├── layout/            # Layout components
│   │   ├── admin/             # Admin-specific components
│   │   ├── blog/              # Blog-specific components
│   │   └── parent/            # Parent portal components
│   │
│   ├── lib/
│   │   ├── api.ts            # API client
│   │   ├── auth.ts           # Authentication helpers
│   │   ├── db.ts             # Database connection
│   │   └── utils.ts          # Utility functions
│   │
│   ├── hooks/                 # Custom React hooks
│   ├── types/                 # TypeScript types
│   ├── styles/                # Global styles
│   └── store/                 # State management (Zustand)
│
├── public/                    # Static assets
├── database/
│   ├── migrations/           # SQL migration files
│   └── seeds/                # Seed scripts
│
├── docs/                      # Documentation
├── tests/                     # Test files
└── config files (JSON, TS)
```

---

## Common Commands

### Development
```bash
npm run dev          # Start dev server
npm run type-check   # Type checking
npm run lint         # Linting
npm run format       # Code formatting
```

### Database
```bash
npm run db:migrate   # Run migrations
npm run db:seed      # Seed data
npm run db:reset     # Reset database
npm run db:studio    # Open database browser (optional)
```

### Build & Deploy
```bash
npm run build        # Build for production
npm start            # Start production server
npm run analyze      # Analyze bundle size
```

### Testing
```bash
npm run test         # Run tests
npm run test:ui      # Test UI
npm run test:coverage # Coverage report
```

---

## Development Workflow

### 1. Create a Feature Branch
```bash
git checkout -b feature/admin-dashboard
```

### 2. Make Changes & Test
```bash
npm run dev
npm run type-check
npm run lint
npm run test
```

### 3. Format & Commit
```bash
npm run format
git add .
git commit -m "feat: add admin dashboard"
```

### 4. Push & Create Pull Request
```bash
git push origin feature/admin-dashboard
```

---

## Environment Variables

### Required for Development
```
NEXT_PUBLIC_API_URL=http://localhost:3000
DATABASE_URL=postgresql://user:password@localhost:5432/campus_maya_dev
NEXTAUTH_SECRET=your-secret-here
```

### Optional (Features)
```
AWS_ACCESS_KEY_ID=...           # For S3 uploads
ANTHROPIC_API_KEY=...          # For Claude AI features
FACEBOOK_APP_ID=...            # For social media
```

See `.env.example` for all variables.

---

## Database Migrations

### Create a New Migration
```bash
npm run db:create-migration -- add_users_table
```

This creates a file in `database/migrations/` like `001_add_users_table.sql`.

### Running Migrations
```bash
npm run db:migrate              # Run all pending migrations
npm run db:migrate -- --step 1  # Run one migration
```

### Rolling Back
```bash
npm run db:rollback             # Undo last migration
```

---

## Authentication

### Admin Panel
- Route: `/admin`
- Login: `/admin/login`
- Requires: `role = 'admin'`

### Parent Portal
- Route: `/parent`
- Login: `/parent/login`
- Requires: `role = 'parent'`

### Blog (Public)
- Route: `/`
- No authentication required

---

## File Upload

Files are uploaded to AWS S3 (or local storage in dev).

```typescript
// Example: Upload image
const formData = new FormData()
formData.append('file', file)

const response = await fetch('/api/media/upload', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`
  },
  body: formData
})

const { media } = await response.json()
```

---

## API Development

### Create a New API Route

```typescript
// src/app/api/example/route.ts

import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Your logic here
    return NextResponse.json({ success: true, data: [] })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'INTERNAL_ERROR' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    // Process request
    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'INVALID_INPUT' },
      { status: 400 }
    )
  }
}
```

---

## Component Development

### Create a New Component

```typescript
// src/components/shared/Button.tsx

import { ReactNode } from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  onClick?: () => void
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${variant} btn-${size}`}
    >
      {children}
    </button>
  )
}
```

---

## Styling with Tailwind CSS

All components use Tailwind CSS classes.

```tsx
// Example
<div className="bg-primary-600 p-4 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold text-white">Title</h2>
  <p className="text-gray-100 mt-2">Description</p>
</div>
```

See `tailwind.config.ts` for available colors and spacing.

---

## State Management

Using Zustand for global state:

```typescript
// src/store/authStore.ts
import { create } from 'zustand'

interface AuthState {
  token: string | null
  user: User | null
  login: (token: string, user: User) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  login: (token, user) => set({ token, user }),
  logout: () => set({ token: null, user: null }),
}))
```

Usage in components:
```tsx
const { token, login, logout } = useAuthStore()
```

---

## Testing

### Unit Tests
```bash
npm run test
```

### Test Example
```typescript
// __tests__/components/Button.test.tsx
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/Button'

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
})
```

---

## Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
vercel deploy
```

See `.vercelrc.json` or `vercel.json` for deployment config.

---

## Troubleshooting

### Port 3000 Already in Use
```bash
lsof -i :3000
kill -9 <PID>
```

### Database Connection Error
- Verify PostgreSQL is running
- Check `DATABASE_URL` in `.env.local`
- Run: `createdb campus_maya_dev`

### Dependencies Conflict
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
npm run type-check
```

### Build Failed
```bash
npm run lint      # Check linting
npm run build     # Try build again
```

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Zustand](https://github.com/pmndrs/zustand)

---

## Getting Help

1. Check existing issues/PRs
2. Read documentation files in `docs/`
3. Ask in project Slack/Discord
4. Create an issue on GitHub

---

**Happy coding! 🚀**
