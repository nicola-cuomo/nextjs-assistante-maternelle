import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Assitante Maternelle',
  description: 'Assistante Maternelle app',
}

export default function RootLayout({
  children,
  session
}: {
  children: React.ReactNode
  session: any
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="flex min-h-screen flex-col items-center p-24">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
