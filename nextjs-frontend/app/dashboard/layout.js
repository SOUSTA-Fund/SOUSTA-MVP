import Header from './header'
import Nav from './nav'

export default function DashboardLayout({ children }) {
  return (
    <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-2xl">
      <div className="flex items-start justify-between">
        <div className="relative hidden h-screen my-4 ml-4 shadow-lg lg:block w-80">
          <div className="h-full bg-white pt-6 rounded-2xl dark:bg-gray-700">
            <Nav />
          </div>
        </div>
        <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <Header />
          {children}
        </div>
      </div>
    </main>
  )
}
