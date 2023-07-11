'use client'

import { useEffect, useState } from 'react'
import { useDashboardContext } from '../../store'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Input,
  Spinner,
} from '@material-tailwind/react'

export default function Page({ params }) {
  const { address } = params
  const { tokens } = useDashboardContext()
  const token = tokens[address]
  console.log(token)

  return (
    <>
      {token && (
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardBody>
              <form>
                <div className="flex flex-col mb-4">
                  <span className="font-bold">Transfer {token.symbol}</span>
                </div>
                <div className="mb-4 flex flex-col gap-6">
                  <Input size="lg" label="To Address" name="address" required />
                </div>
                <div className="">
                  <Button>Transfer</Button>
                </div>
              </form>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <form>
                <div className="flex flex-col mb-4">
                  <span className="font-bold">
                    Get {token.symbol} Balance at Address
                  </span>
                </div>
                <div className="mb-4 flex flex-col gap-6">
                  <Input size="lg" label="Address" name="address" required />
                </div>
                <div className="">
                  <Button>Get Balance</Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </div>
      )}
    </>
  )
}
