import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

// Poppins for headlines (Design.md specification)
const poppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-headline',
})

// Inter for body text (Design.md specification)
const interFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Campus Maya Koleji',
  description: 'Blog, Admin Panel, and Parent Portal for Campus Maya Koleji',
  keywords: ['campus', 'maya', 'koleji', 'school', 'education'],
  authors: [{ name: 'Campus Maya Team' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={`${poppinsFont.variable} ${interFont.variable} font-body bg-gray-50 text-gray-900`}>
        {children}
      </body>
    </html>
  )
}
