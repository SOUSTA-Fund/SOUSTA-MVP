'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { ethers } from 'ethers'
import Erc20Artifact from '../../contracts/vendor/ERC20.json'
import FactoryArtifact from '../../contracts/compiled/Factory.json'
import contractAddress from '../../contracts/compiled/contract-address.json'

const DashboardContext = createContext()

export const DashboardContextProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([])
  const [factory, setFactory] = useState()
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

      setAddresses(Object.keys(tokens))
      setFactory(factory)
      setTokenData({ numTokens, tokens })
    }
    init()
  }, [])

  return (
    <DashboardContext.Provider value={{ addresses, factory, tokenData }}>
      {children}
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => useContext(DashboardContext)
