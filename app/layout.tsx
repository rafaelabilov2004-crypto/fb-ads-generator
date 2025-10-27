import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FB Ads Generator - Rufat Abilov Edition',
  description: 'Generate persuasive Spanish texts for Facebook Ads with expert Rufat Abilov mode. Spain & Facebook compliant.',
  keywords: 'facebook ads, trading, crypto, rufat abilov, spanish marketing, ad creative generator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
