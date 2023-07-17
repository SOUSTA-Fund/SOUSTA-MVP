import '../globals.css'
import { Inter } from 'next/font/google'
import { GlobalContextProvider } from '../context/store'
import Header from './header'
import Nav from './nav'
import { DashboardContextProvider } from './store'

const inter = Inter({ subsets: ['latin'] })

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-b from-blue-50`}>
        <GlobalContextProvider>
          <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-2xl">
            <div className="flex items-start justify-between">
              <Nav />
              <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                <Header />
                <div className="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
                  <DashboardContextProvider>
                    {children}
                  </DashboardContextProvider>
                </div>
              </div>
            </div>
          </main>
        </GlobalContextProvider>
      </body>
    </html>
  )
}
