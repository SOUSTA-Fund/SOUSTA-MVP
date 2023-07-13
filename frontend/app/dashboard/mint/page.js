'use client'

import { useState } from 'react'
import { useDashboardContext } from '../store'
import {
  Alert,
  Card,
  Input,
  Button,
  CardBody,
  Spinner,
} from '@material-tailwind/react'

export default function Mint() {
  const { factory } = useDashboardContext()

  const [transactionError, setTransactionError] = useState()
  const [transactionSuccess, setTransactionSuccess] = useState(false)
  const [txBeingSent, setTxBeingSent] = useState()

  // This is an error code that indicates the user canceled a transaction
  const ERROR_CODE_TX_REJECTED_BY_USER = 4001

  const deployToken = async (name, ticker, supply) => {
    try {
      setTransactionError(null)

      const tx = await factory.deployToken(name, ticker, supply)
      setTxBeingSent(tx.hash)

      const receipt = await tx.wait()

      if (receipt.status === 0) {
        throw new Error('Transaction failed')
      }

      setTransactionSuccess(true)
    } catch (e) {
      if (e.code === ERROR_CODE_TX_REJECTED_BY_USER) {
        return
      }

      setTransactionError(e)
    } finally {
      setTxBeingSent(null)
    }
  }

  const getRpcErrorMessage = (error) => {
    if (error.data) {
      return error.data.message
    }

    return error.message
  }

  const onSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target.form)
    const name = formData.get('name')
    const ticker = formData.get('ticker')
    const supply = formData.get('supply')

    if (name && ticker && supply) {
      deployToken(name, ticker, supply)
    }
  }

  return (
    <>
      {txBeingSent && (
        <Alert className="mb-4">
          <div className="flex">
            <Spinner />
            <div className="ml-4">
              Waiting for transaction{' '}
              <span className="font-bold">{txBeingSent}</span> to be mined.
            </div>
          </div>
        </Alert>
      )}

      {transactionError && (
        <Alert
          className="break-all mb-4"
          color="red"
          open={!!transactionError}
          onClose={() => setTransactionError(null)}
        >
          {getRpcErrorMessage(transactionError)}
        </Alert>
      )}

      {transactionSuccess && (
        <Alert
          className="mb-4"
          color="green"
          open={transactionSuccess}
          onClose={() => setTransactionSuccess(false)}
        >
          Transaction <span className="font-bold">{txBeingSent}</span> mined
          successfully.
        </Alert>
      )}

      <Card className="w-1/3">
        <CardBody>
          <form>
            <div className="flex flex-col mb-4">
              <span className="font-bold">Mint SOUSTA Token</span>
            </div>
            <div className="mb-4 flex flex-col gap-6">
              <Input size="lg" label="Token Name" name="name" required />
              <Input size="lg" label="Token Ticker" name="ticker" required />
              <Input
                size="lg"
                label="Initial Supply"
                name="supply"
                required
                type="number"
              />
            </div>
            <div className="">
              <Button disabled={!!txBeingSent} onClick={onSubmit}>
                Mint
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </>
  )
}
