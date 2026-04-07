'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/shared/Button'
import { useAuthStore } from '@/store/authStore'
import { apiClient } from '@/lib/api'

export default function ParentLoginPage() {
  const router = useRouter()
  const { login } = useAuthStore()
  const [step, setStep] = useState<'login' | '2fa'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [twoFACode, setTwoFACode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await apiClient.login(email, password)
      if (response.success && response.data) {
        // Check if 2FA is enabled (mock for now)
        const has2FA = Math.random() > 0.5 // Demo: random
        if (has2FA) {
          setStep('2fa')
        } else {
          login(response.data.token, response.data.user)
          router.push('/parent/dashboard')
        }
      } else {
        setError(response.message || 'Login failed')
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerify2FA = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Mock 2FA verification
    if (twoFACode.length === 6) {
      try {
        const response = await apiClient.login(email, password)
        if (response.success && response.data) {
          login(response.data.token, response.data.user)
          router.push('/parent/dashboard')
        }
      } catch (err: any) {
        setError('2FA verification failed')
      }
    } else {
      setError('Please enter a valid 6-digit code')
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary-50 to-accent-50 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-secondary-600 mb-2">Campus Maya</h1>
          <p className="text-gray-600">Veli Portalı</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {error}
            </div>
          )}

          {step === 'login' ? (
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-posta
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="veli@ornek.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                />
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Şifre
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                />
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 text-secondary-600 rounded focus:ring-secondary-500"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                  Beni Hatırla
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                isLoading={isLoading}
                className="w-full"
              >
                Giriş Yap
              </Button>
            </form>
          ) : (
            <form onSubmit={handleVerify2FA} className="space-y-6">
              <div className="text-center mb-6">
                <p className="text-gray-600">
                  Kimliğinizi doğrulamak için 6 basamaklı kodu girin
                </p>
              </div>

              {/* 2FA Code Input */}
              <div>
                <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-2">
                  Doğrulama Kodu
                </label>
                <input
                  id="code"
                  type="text"
                  maxLength={6}
                  value={twoFACode}
                  onChange={(e) => setTwoFACode(e.target.value.replace(/\D/g, ''))}
                  required
                  placeholder="000000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-center text-2xl letter-spacing-widest focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent font-mono"
                />
              </div>

              {/* Verify Button */}
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                isLoading={isLoading}
                className="w-full"
              >
                Doğrula
              </Button>

              {/* Back to Login */}
              <button
                type="button"
                onClick={() => {
                  setStep('login')
                  setTwoFACode('')
                }}
                className="w-full text-secondary-600 hover:text-secondary-700 text-sm font-medium"
              >
                Geri Dön
              </button>
            </form>
          )}

          {/* Forgot Password Link */}
          {step === 'login' && (
            <div className="mt-6 text-center">
              <Link
                href="/parent/forgot-password"
                className="text-secondary-600 hover:text-secondary-700 text-sm font-medium"
              >
                Şifreni mi unuttun?
              </Link>
            </div>
          )}
        </div>

        {/* Footer Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            Ana sayfaya dön:{' '}
            <Link href="/" className="text-secondary-600 hover:text-secondary-700 font-medium">
              Campus Maya
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
