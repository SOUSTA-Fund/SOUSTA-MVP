'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useGlobalContext } from '../context/store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import routes from '../routes'
import { faBitcoin } from '@fortawesome/free-brands-svg-icons'
import {
  faCoins,
  faGear,
  faPersonThroughWindow,
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
  const { logout } = useGlobalContext()
  const pathname = usePathname()
  const activeClass =
    'text-blue-500 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800 focus:text-blue-500'

  return (
    <Card className="h-screen mt-4 ml-4 p-4 w-80">
      <div className="mb-2 p-4">
        <Typography variant="paragraph" color="blue-gray">
          SOUSTA
        </Typography>
      </div>
      <List>
        <Link href={routes.tokens}>
          <ListItem className={`${pathname === routes.tokens && activeClass}`}>
            <ListItemPrefix>
              <FontAwesomeIcon
                style={{ height: 20, width: 20 }}
                icon={faCoins}
              />
            </ListItemPrefix>
            Tokens
          </ListItem>
        </Link>

        <Link href={routes.mint}>
          <ListItem className={`${pathname === routes.mint && activeClass}`}>
            <ListItemPrefix>
              <FontAwesomeIcon
                style={{ height: 20, width: 20 }}
                icon={faScrewdriverWrench}
              />
            </ListItemPrefix>
            Mint
          </ListItem>
        </Link>

        <Link href={routes.pegInOut}>
          <ListItem
            className={`${pathname === routes.pegInOut && activeClass}`}
          >
            <ListItemPrefix>
              <FontAwesomeIcon
                style={{ height: 20, width: 20 }}
                icon={faBitcoin}
              />
            </ListItemPrefix>
            Peg-In/Out
          </ListItem>
        </Link>

        <Link href={routes.transparency}>
          <ListItem
            className={`${pathname === routes.transparency && activeClass}`}
          >
            <ListItemPrefix>
              <FontAwesomeIcon
                style={{ height: 20, width: 20 }}
                icon={faPersonThroughWindow}
              />
            </ListItemPrefix>
            Transparency
          </ListItem>
        </Link>

        <Link href={routes.settings}>
          <ListItem
            className={`${pathname === routes.settings && activeClass}`}
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

        <button onClick={() => logout()}>
          <ListItem>
            <ListItemPrefix>
              <FontAwesomeIcon
                style={{ height: 20, width: 20 }}
                icon={faPowerOff}
              />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </button>
      </List>
    </Card>
  )
}
