import { Inter, IBM_Plex_Mono } from 'next/font/google'
import { Header } from './components/header'
import { ReactNode } from 'react'
import { ContactForm } from './components/contact-form'
import { Footer } from './components/footer'
import { Toaster } from './components/toaster'
import { BackToTop } from './components/back-to-top'
import './globals.css'

export const metadata = {
  title: {
    default: 'Home',
    template: '%s | Allan Kehl - Software Engineer',
  },
  icons: [
    {
      url: '/favicon.svg',
    },
  ],
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-US" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Toaster />
        <BackToTop />

        <Header />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  )
}
