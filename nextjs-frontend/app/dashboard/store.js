'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { ethers } from 'ethers'
import Erc20Artifact from '../../contracts/vendor/ERC20.json'
import FactoryArtifact from '../../contracts/compiled/Factory.json'
import contractAddress from '../../contracts/compiled/contract-address.json'

const DashboardContext = createContext()

export const DashboardContextProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([])
  const [tokenData, setTokenData] = useState({ numTokens: 0, tokens: {} })

  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const factory = new ethers.Contract(
    contractAddress.Factory,
    FactoryArtifact.abi,
    provider.getSigner(0),
  )

  useEffect(() => {
    updateTokens()
  }, [])

  const getTokens = async (numTokens) => {
    setAddresses([])
    const tokens = {}

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

    setAddresses(Object.keys(tokens))
    setTokenData({ numTokens, tokens })
  }

  const updateTokens = async () => {
    let numTokens = await factory.getNumberOfTokens()
    numTokens = parseInt(numTokens['_hex'], 16)
    const hasNumberOfTokensChanged = numTokens !== tokenData.numTokens

    if (hasNumberOfTokensChanged) {
      getTokens(numTokens)
    }
  }

  return (
    <DashboardContext.Provider
      value={{ addresses, factory, tokenData, updateTokens }}
    >
      {children}
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => useContext(DashboardContext)
