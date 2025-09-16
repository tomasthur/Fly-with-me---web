import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airline Manager - Vytvor si vlastnú aerolinku',
  description: 'Mobilná hra kde si môžeš vytvoriť vlastnú aerolinku, kupovať lietadlá, najímať pilotov a stewardov, vytvárať lety a riadiť svoju leteckú spoločnosť.',
  keywords: 'airline manager, mobilná hra, aerolinka, lietadlá, piloti, stewardky, lety',
  authors: [{ name: 'Airline Manager Team' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}