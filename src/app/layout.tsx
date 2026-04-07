import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
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
      <body className={`${inter.variable} ${poppins.variable} font-body bg-gray-50`}>
        {children}
      </body>
    </html>
  )
}
