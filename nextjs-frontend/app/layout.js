import './globals.css'
import { Inter } from 'next/font/google'
import { GlobalContextProvider } from './context/store'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SOUSTA',
  description: 'Asset Tokenization',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  )
}
