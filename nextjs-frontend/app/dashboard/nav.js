'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCoins,
  faEye,
  faGear,
  faPowerOff,
  faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons'
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from '@material-tailwind/react'

export default function Nav() {
  const pathname = usePathname()
  const activeClass =
    'text-blue-500 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800 focus:text-blue-500'
  const linkPaths = {
    home: '/',
    overview: '/dashboard/overview',
    tokens: '/dashboard/tokens',
    mint: '/dashboard/mint',
    settings: '/dashboard/settings',
  }

  return (
    <Card className="h-screen mt-4 ml-4 p-4 w-80">
      <div className="mb-2 p-4">
        <Typography variant="paragraph" color="blue-gray">
          SOUSTA
        </Typography>
      </div>
      <List>
        <Link href={linkPaths.overview}>
          <ListItem
            className={`${pathname === linkPaths.overview && activeClass}`}
          >
            <ListItemPrefix>
              <FontAwesomeIcon style={{ height: 20, width: 20 }} icon={faEye} />
            </ListItemPrefix>
            Overview
          </ListItem>
        </Link>

        <Link href={linkPaths.tokens}>
          <ListItem
            className={`${pathname === linkPaths.tokens && activeClass}`}
          >
            <ListItemPrefix>
              <FontAwesomeIcon
                style={{ height: 20, width: 20 }}
                icon={faCoins}
              />
            </ListItemPrefix>
            Tokens
          </ListItem>
        </Link>

        <Link href={linkPaths.mint}>
          <ListItem className={`${pathname === linkPaths.mint && activeClass}`}>
            <ListItemPrefix>
              <FontAwesomeIcon
                style={{ height: 20, width: 20 }}
                icon={faScrewdriverWrench}
              />
            </ListItemPrefix>
            Mint
          </ListItem>
        </Link>

        <Link href={linkPaths.settings}>
          <ListItem
            className={`${pathname === linkPaths.settings && activeClass}`}
          >
            <ListItemPrefix>
              <FontAwesomeIcon
                style={{ height: 20, width: 20 }}
                icon={faGear}
              />
            </ListItemPrefix>
            Settings
          </ListItem>
        </Link>

        <Link href={linkPaths.home}>
          <ListItem>
            <ListItemPrefix>
              <FontAwesomeIcon
                style={{ height: 20, width: 20 }}
                icon={faPowerOff}
              />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </Link>
      </List>
    </Card>
  )
}
