import './globals.css'
import { Amiri } from 'next/font/google'

const amiri = Amiri({ 
  weight: ['400', '700'],
  subsets: ['arabic', 'latin'],
  variable: '--font-amiri'
})

export const metadata = {
  title: 'Al-Kahfi 10',
  description: 'Aplikasi pembelajaran Surah Al-Kahfi',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={amiri.variable}>{children}</body>
    </html>
  )
}