'use client'

import Link from 'next/link'
import routes from '../../routes'
import { useDashboardContext } from '../store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBitcoin } from '@fortawesome/free-brands-svg-icons'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Spinner,
} from '@material-tailwind/react'

export default function Tokens() {
  const { addresses, tokens } = useDashboardContext()

  return (
    <>
      {!addresses.length && (
        <div className="flex h-full items-center justify-center">
          <Spinner className="h-16 w-16" />
        </div>
      )}
      {!!addresses.length && (
        <ul className="grid grid-cols-3 gap-4">
          {addresses.map((address) => (
            <li key={address}>
              <Card className="h-full justify-between">
                <CardBody>
                  <div className="flex font-bold items-center mb-4 text-xl">
                    <FontAwesomeIcon
                      style={{ height: 44, width: 44 }}
                      icon={faBitcoin}
                    />
                    <div className="flex flex-col items-start ml-4">
                      <span>{tokens[address]['name']}</span>
                      <Chip
                        size="sm"
                        value={tokens[address]['symbol']}
                        variant="ghost"
                      />
                    </div>
                  </div>
                  <div className="border-b-2 border-gray-100 mb-2 pb-2">
                    <span className="text-gray-500 mr-2 text-sm">
                      Total Supply
                    </span>{' '}
                    {tokens[address]['totalSupply']}
                  </div>
                  <div className="border-b-2 border-gray-100 mb-2 pb-2 text-sm">
                    <span className="text-gray-500 mr-2">Contract Address</span>
                    <br />
                    <p className="font-mono truncate">{address}</p>
                  </div>
                  <div className="mb-4">
                    <a
                      href={`https://explorer.testnet.rsk.co/address/${address}`}
                      className="underline"
                      target="_blank"
                    >
                      View {tokens[address]['symbol']} on Rootstock Explorer
                    </a>
                  </div>
                </CardBody>
                <CardFooter className="pt-0">
                  <div>
                    <Link href={`${routes.tokens}/${address}`}>
                      <Button>Interact With {tokens[address]['symbol']}</Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
