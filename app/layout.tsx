import React from "react"
import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const merriweather = Merriweather({ 
  subsets: ["latin"], 
  weight: ['400', '700', '900'],
  variable: '--font-merriweather' 
});

export const metadata: Metadata = {
  title: 'Whey Protein Brasil | Guia Completo sobre Proteina do Soro do Leite',
  description: 'Tudo sobre Whey Protein: tipos, beneficios, como tomar, melhores marcas e dicas para ganho de massa muscular. Guia completo e atualizado.',
  keywords: 'whey protein, proteina do soro do leite, suplemento, massa muscular, whey isolado, whey concentrado, whey hidrolisado',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.jpg',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
  openGraph: {
    title: 'Whey Protein Brasil | Guia Completo',
    description: 'Tudo sobre Whey Protein: tipos, beneficios, como tomar, melhores marcas.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${merriweather.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
