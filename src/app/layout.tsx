import './globals.css'
import { Poppins } from 'next/font/google'
import type { Metadata } from 'next'

const poppins = Poppins({ subsets: ['latin'], weight: ['300','400','500','600','700','800','900'], display: 'swap' })
export const metadata: Metadata = {
  title: 'PsychoConvert Pro - Transform Your Closing Ratio from 2-5% to 10-25%',
  description:
    "Psychology-driven conversion optimization system that influences all 3 parts of your customer's brain to dramatically improve closing ratios.",
  icons: { icon: '/favicon.ico' },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

