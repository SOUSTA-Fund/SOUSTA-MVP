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
  const { contractAddresses, tokens } = useDashboardContext()

  return (
    <>
      {!contractAddresses.length && (
        <div className="flex h-full items-center justify-center">
          <Spinner className="h-16 w-16" />
        </div>
      )}
      {!!contractAddresses.length && (
        <ul className="grid grid-cols-3 gap-4">
          {contractAddresses.map((contractAddress) => (
            <li key={contractAddress}>
              <Card className="h-full justify-between">
                <CardBody>
                  <div className="flex font-bold items-center mb-4 text-xl">
                    <FontAwesomeIcon
                      style={{ height: 44, width: 44 }}
                      icon={faBitcoin}
                    />
                    <div className="flex flex-col items-start ml-4">
                      <span>{tokens[contractAddress]['name']}</span>
                      <Chip
                        size="sm"
                        value={tokens[contractAddress]['symbol']}
                        variant="ghost"
                      />
                    </div>
                  </div>
                  <div className="border-b-2 border-gray-100 mb-2 pb-2">
                    <span className="text-gray-500 mr-2 text-sm">
                      Total Supply
                    </span>{' '}
                    {tokens[contractAddress]['totalSupply']}
                  </div>
                  <div className="border-b-2 border-gray-100 mb-2 pb-2 text-sm">
                    <span className="text-gray-500 mr-2">Contract Address</span>
                    <br />
                    <p className="font-mono truncate">{contractAddress}</p>
                  </div>
                  <div className="mb-4">
                    <a
                      href={`https://explorer.testnet.rsk.co/address/${contractAddress}`}
                      className="underline"
                      target="_blank"
                    >
                      View {tokens[contractAddress]['symbol']} on Rootstock
                      Explorer
                    </a>
                  </div>
                </CardBody>
                <CardFooter className="pt-0">
                  <div>
                    <Link href={`${routes.tokens}/${contractAddress}`}>
                      <Button>
                        Interact With {tokens[contractAddress]['symbol']}
                      </Button>
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
