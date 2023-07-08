'use client'

import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

import Erc20Artifact from '../../../contracts/vendor/ERC20.json'
import FactoryArtifact from '../../../contracts/compiled/Factory.json'
import contractAddress from '../../../contracts/compiled/contract-address.json'

export default function Tokens() {
  const [factory, setFactory] = useState()
  const [provider, setProvider] = useState()
  const [tokenData, setTokenData] = useState({ numTokens: 0, tokens: {} })

  useEffect(() => {
    async function init() {
      const provider = new ethers.providers.Web3Provider(window.ethereum)

      const factory = new ethers.Contract(
        contractAddress.Factory,
        FactoryArtifact.abi,
        provider.getSigner(0),
      )

      const tokens = {}
      let numTokens = await factory.getNumberOfTokens()
      numTokens = parseInt(numTokens['_hex'], 16)

      if (numTokens) {
        for (let i = 0; i < numTokens; i++) {
          const address = await factory.getTokenAddress(i)
          const token = new ethers.Contract(
            address,
            Erc20Artifact.abi,
            provider.getSigner(0),
          )

          const name = await token.name()
          const symbol = await token.symbol()
          let totalSupply = await token.totalSupply()
          totalSupply = parseInt(totalSupply['_hex'], 16)

          tokens[address] = {
            contract: token,
            name,
            symbol,
            totalSupply,
          }
        }
      }

      setTokenData({ numTokens, tokens })
    }
    init()
  }, [])

  const addresses = Object.keys(tokenData.tokens)

  return (
    <div>
      <div className="pl-0 md:p-4 md:space-y-4">
        <div className="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
          {!!addresses.length && (
            <ul className="grid grid-flow-col gap-4">
              {addresses.map((address) => (
                <li
                  className="p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700"
                  key={address}
                >
                  <div className="flex font-bold items-center mb-4 text-xl">
                    {tokenData.tokens[address]['name']}
                    <span className="ml-3 px-2 py-1 font-semibold text-blue-500 bg-blue-100 rounded-md text-xs">
                      {tokenData.tokens[address]['symbol']}
                    </span>
                  </div>
                  <div className="mb-2">
                    <span className="text-gray-500 mr-2 text-sm">
                      Total Supply
                    </span>{' '}
                    {tokenData.tokens[address]['totalSupply']}
                  </div>
                  <div className="mb-4">
                    <span className="text-gray-500 mr-2 text-sm">
                      Contract Address
                    </span>{' '}
                    {address}
                  </div>
                  <div>
                    <a
                      href=""
                      className="bg-zinc-800 inline-block px-6 py-2 rounded-md text-white"
                    >
                      Interact With {tokenData.tokens[address]['symbol']}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
