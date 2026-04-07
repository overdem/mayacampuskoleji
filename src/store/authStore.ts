import { create } from 'zustand'
import type { User, Session } from '@/types'

interface AuthState {
  user: User | null
  token: string | null
  isLoading: boolean
  error: string | null

  // Actions
  setUser: (user: User | null) => void
  setToken: (token: string | null) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  login: (token: string, user: User) => void
  logout: () => void
  clearError: () => void
  isAuthenticated: () => boolean
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
  isLoading: false,
  error: null,

  setUser: (user) => set({ user }),
  setToken: (token) => {
    if (token) {
      localStorage.setItem('token', token)
    } else {
      localStorage.removeItem('token')
    }
    set({ token })
  },
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),

  login: (token, user) => {
    set({ token, user, error: null })
    localStorage.setItem('token', token)
  },

  logout: () => {
    set({ token: null, user: null, error: null })
    localStorage.removeItem('token')
  },

  clearError: () => set({ error: null }),

  isAuthenticated: () => {
    const { token, user } = get()
    return !!token && !!user
  },
}))
