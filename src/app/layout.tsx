import { Banner, Contact, FAQ, Footer, Navbar, Product } from '#/widgets'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'K´affa Kaffeé',
  description: '¡Aroma y sabor que conquistan paladares!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es' className='scroll-smooth'>
      <body className={inter.className}>
        <div>
          {/* <Banner /> */}
          <Navbar />
          {children}
        </div>
        <div className='px-4 sm:px-12 lg:px-24 overflow-hidden'>
          <Product />
          <FAQ />
          <Contact />
        </div>
        <Footer />
      </body>
    </html>
  )
}
