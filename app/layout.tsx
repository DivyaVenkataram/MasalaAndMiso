import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MASALA & MISO — A Culinary Journey Between India and Japan',
  description: 'A luxury culinary travel publication. Michelin-style editorial, travel storytelling, and elevated food journalism.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={playfair.variable}>
      <body className="font-editorial">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
