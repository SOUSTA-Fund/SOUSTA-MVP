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
  const [transactionError, setTransactionError] = useState()

  const { address } = params
  const { tokens } = useDashboardContext()
  const token = tokens[address]

  // This is an error code that indicates the user canceled a transaction
  const ERROR_CODE_TX_REJECTED_BY_USER = 4001

  const getBalance = async (address) => {
    try {
      console.log(address)
      setTransactionError(null)

      const tx = await token.contract.balanceOf(address)
      console.log(parseInt(tx['_hex'], 16))

      const receipt = await tx.wait()
    } catch (e) {
      setTransactionError(e)
    }
  }

  const onGetBalance = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target.form)
    const address = formData.get('address')

    if (address) {
      getBalance(address)
    }
  }

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
                  <Button onClick={onGetBalance}>Get Balance</Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </div>
      )}
    </>
  )
}
