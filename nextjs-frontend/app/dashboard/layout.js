'use client'

import { usePathname } from 'next/navigation'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCoins,
  faEye,
  faGear,
  faHouse,
  faMagnifyingGlass,
  faScrewdriverWrench,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

export default function DashboardLayout({ children }) {
  const signer = Cookies.get('signer')
  const pathname = usePathname()
  const activeClass =
    'text-blue-500 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800'
  const inActiveClass = 'text-gray-500 dark:text-gray-200 hover:text-blue-500'
  const linkPaths = {
    home: '/',
    overview: '/dashboard/overview',
    tokens: '/dashboard/tokens',
    mint: '/dashboard/mint',
    settings: '/dashboard/settings',
  }

  return (
    <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-2xl">
      <div className="flex items-start justify-between">
        <div className="relative hidden h-screen my-4 ml-4 shadow-lg lg:block w-80">
          <div className="h-full bg-white pt-6 rounded-2xl dark:bg-gray-700">
            <nav className="mt-6">
              <div>
                <Link
                  className={`flex items-center justify-start w-full p-4 my-2 font-thin uppercase transition-colors duration-200 ${
                    pathname === linkPaths.home ? activeClass : inActiveClass
                  }`}
                  href={linkPaths.home}
                >
                  <span className="text-left">
                    <FontAwesomeIcon
                      style={{ height: 20, width: 20 }}
                      icon={faHouse}
                    />
                  </span>
                  <span className="mx-4 text-sm font-normal">SOUSTA</span>
                </Link>
                <Link
                  className={`flex items-center justify-start w-full p-4 my-2 font-thin uppercase transition-colors duration-200 ${
                    pathname === linkPaths.overview
                      ? activeClass
                      : inActiveClass
                  }`}
                  href={linkPaths.overview}
                >
                  <span className="text-left">
                    <FontAwesomeIcon
                      style={{ height: 20, width: 20 }}
                      icon={faEye}
                    />
                  </span>
                  <span className="mx-4 text-sm font-normal">Overview</span>
                </Link>
                <Link
                  className={`flex items-center justify-start w-full p-4 my-2 font-thin uppercase transition-colors duration-200 ${
                    pathname === linkPaths.tokens ? activeClass : inActiveClass
                  }`}
                  href={linkPaths.tokens}
                >
                  <span className="text-left">
                    <FontAwesomeIcon
                      style={{ height: 20, width: 20 }}
                      icon={faCoins}
                    />
                  </span>
                  <span className="mx-4 text-sm font-normal">Tokens</span>
                </Link>
                <Link
                  className={`flex items-center justify-start w-full p-4 my-2 font-thin uppercase transition-colors duration-200 ${
                    pathname === linkPaths.mint ? activeClass : inActiveClass
                  }`}
                  href={linkPaths.mint}
                >
                  <span className="text-left">
                    <FontAwesomeIcon
                      style={{ height: 20, width: 20 }}
                      icon={faScrewdriverWrench}
                    />
                  </span>
                  <span className="mx-4 text-sm font-normal">Mint</span>
                </Link>
                <Link
                  className={`flex items-center justify-start w-full p-4 my-2 font-thin uppercase transition-colors duration-200 ${
                    pathname === linkPaths.settings
                      ? activeClass
                      : inActiveClass
                  }`}
                  href={linkPaths.settings}
                >
                  <span className="text-left">
                    <FontAwesomeIcon
                      style={{ height: 20, width: 20 }}
                      icon={faGear}
                    />
                  </span>
                  <span className="mx-4 text-sm font-normal">Settings</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
        <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <header className="z-40 items-center w-full h-16 bg-white shadow-lg dark:bg-gray-700 rounded-2xl">
            <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
              <div className="relative flex items-center justify-between w-full pl-1 lg:max-w-68 sm:pr-2 sm:ml-0">
                <div className="relative left-0 z-50 flex h-auto h-full">
                  <div className="relative flex items-center w-full h-full lg:w-64 group">
                    <FontAwesomeIcon
                      className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
                      style={{ height: 16, width: 16 }}
                      icon={faMagnifyingGlass}
                    />
                    <input
                      type="text"
                      className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input"
                      placeholder="Search"
                    />
                    <div className="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
                      +
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center justify-end p-1 ml-5 mr-4 sm:mr-0 sm:right-auto">
                  <div className="text-sm">
                    <span className="text-gray-500">Connected Account </span>
                    <br />
                    <span className="font-mono">{signer}</span>
                  </div>
                  <a href="#" className="block relative ml-5">
                    <FontAwesomeIcon
                      style={{ height: 30, width: 30 }}
                      icon={faUser}
                    />
                  </a>
                </div>
              </div>
            </div>
          </header>
          {children}
        </div>
      </div>
    </main>
  )
}
