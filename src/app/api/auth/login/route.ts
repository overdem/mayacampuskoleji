import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Validation schema
const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password too short'),
})

// Mock user database
const mockUsers = {
  'admin@campus.com': {
    id: '1',
    email: 'admin@campus.com',
    password: 'admin123',
    fullName: 'Admin User',
    role: 'admin',
  },
  'parent@campus.com': {
    id: '2',
    email: 'parent@campus.com',
    password: 'parent123',
    fullName: 'Parent User',
    role: 'parent',
  },
}

// Mock JWT token generator
function generateToken(userId: string, email: string, role: string): string {
  // In production, use jsonwebtoken library
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString(
    'base64'
  )
  const payload = Buffer.from(
    JSON.stringify({
      userId,
      email,
      role,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60, // 7 days
    })
  ).toString('base64')
  const signature = 'mock_signature'
  return `${header}.${payload}.${signature}`
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const { email, password } = loginSchema.parse(body)

    // Mock authentication
    const user = (mockUsers as any)[email]
    if (!user || user.password !== password) {
      return NextResponse.json(
        {
          success: false,
          error: 'INVALID_CREDENTIALS',
          message: 'Invalid email or password',
        },
        { status: 401 }
      )
    }

    // Generate token
    const token = generateToken(user.id, user.email, user.role)

    return NextResponse.json(
      {
        success: true,
        data: {
          token,
          user: {
            id: user.id,
            email: user.email,
            fullName: user.fullName,
            role: user.role,
          },
          expiresIn: 7 * 24 * 60 * 60, // 7 days in seconds
        },
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'VALIDATION_ERROR',
          message: error.errors[0].message,
        },
        { status: 422 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        error: 'INTERNAL_ERROR',
        message: 'An error occurred',
      },
      { status: 500 }
    )
  }
}
