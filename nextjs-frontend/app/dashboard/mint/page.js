'use client'

import { Card, Input, Button, CardBody } from '@material-tailwind/react'

export default function Mint() {
  const onSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target.form)
    const name = formData.get('name')
    const ticker = formData.get('ticker')
    const supply = formData.get('supply')
    console.log(name, ticker, supply)

    if (name && ticker && supply) {
      deployToken(name, ticker, supply)
    }
  }

  return (
    <Card className="w-1/3">
      <CardBody>
        <form>
          <div className="flex flex-col mb-4">
            <span className="font-bold">Mint SOUSTA Token</span>
          </div>
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Token Name" name="name" />
            <Input size="lg" label="Token Ticker" name="ticker" />
            <Input
              size="lg"
              label="Initial Supply"
              name="supply"
              type="number"
            />
          </div>
          <div className="">
            <Button onClick={onSubmit}>Mint</Button>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}
