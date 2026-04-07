import type { Metadata } from 'next'
import { Inter, Poppins, Plus_Jakarta_Sans, Work_Sans } from 'next/font/google'
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

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-headline',
})

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
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
      <body className={`${inter.variable} ${poppins.variable} ${plusJakartaSans.variable} ${workSans.variable} font-body bg-background text-on-surface`}>
        {children}
      </body>
    </html>
  )
}
