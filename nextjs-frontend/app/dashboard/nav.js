'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCoins,
  faEye,
  faGear,
  faHouse,
  faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
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
    <nav className="mt-6">
      <Link
        className={`flex items-center justify-start w-full p-4 my-2 font-thin uppercase transition-colors duration-200 ${
          pathname === linkPaths.home ? activeClass : inActiveClass
        }`}
        href={linkPaths.home}
      >
        <span className="text-left">
          <FontAwesomeIcon style={{ height: 20, width: 20 }} icon={faHouse} />
        </span>
        <span className="mx-4 text-sm font-normal">SOUSTA</span>
      </Link>
      <Link
        className={`flex items-center justify-start w-full p-4 my-2 font-thin uppercase transition-colors duration-200 ${
          pathname === linkPaths.overview ? activeClass : inActiveClass
        }`}
        href={linkPaths.overview}
      >
        <span className="text-left">
          <FontAwesomeIcon style={{ height: 20, width: 20 }} icon={faEye} />
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
          <FontAwesomeIcon style={{ height: 20, width: 20 }} icon={faCoins} />
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
          pathname === linkPaths.settings ? activeClass : inActiveClass
        }`}
        href={linkPaths.settings}
      >
        <span className="text-left">
          <FontAwesomeIcon style={{ height: 20, width: 20 }} icon={faGear} />
        </span>
        <span className="mx-4 text-sm font-normal">Settings</span>
      </Link>
    </nav>
  )
}
