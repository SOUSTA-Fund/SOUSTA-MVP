'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { ethers } from 'ethers'
import Erc20Artifact from '../../contracts/vendor/ERC20.json'
import FactoryArtifact from '../../contracts/compiled/Factory.json'
import contractAddress from '../../contracts/compiled/contract-address.json'

const DashboardContext = createContext()

export const DashboardContextProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([])
  const [numTokens, setNumTokens] = useState(0)
  const [updatedNumTokens, setUpdatedNumTokens] = useState(0)
  const [tokens, setTokens] = useState({})

  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const factory = new ethers.Contract(
    contractAddress.Factory,
    FactoryArtifact.abi,
    provider.getSigner(0),
  )

  useEffect(() => {
    const pollDataInterval = setInterval(() => updateNumTokens(), 15000)

    return () => {
      clearInterval(pollDataInterval)
    }
  }, [])

  useEffect(() => {
    const hasNumberOfTokensChanged = updatedNumTokens !== numTokens

    if (hasNumberOfTokensChanged) {
      getTokens()
    }
  }, [updatedNumTokens])

  const getTokens = async () => {
    setAddresses([])
    const tokens = {}

    for (let i = 0; i < updatedNumTokens; i++) {
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
    setNumTokens(updatedNumTokens)
    setTokens(tokens)
  }

  const updateNumTokens = async () => {
    let updatedNumTokens = await factory.getNumberOfTokens()
    updatedNumTokens = parseInt(updatedNumTokens['_hex'], 16)
    setUpdatedNumTokens(updatedNumTokens)
  }

  return (
    <DashboardContext.Provider value={{ addresses, factory, tokens }}>
      {children}
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => useContext(DashboardContext)
