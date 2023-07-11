'use client'

import {
  createContext,
  Dispatch,
  useContext,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { providers } from 'ethers'
import WalletConnectProvider from '@walletconnect/web3-provider'
import routes from '../routes'
import { useRouter } from 'next/navigation'

const GlobalContext = createContext()

const rpcUrls = {
  30: 'https://public-node.rsk.co',
  31: 'https://public-node.testnet.rsk.co',
}

const supportedChains = Object.keys(rpcUrls).map(Number)

const infoOptions = {
  30: { addressBaseURL: 'https://explorer.rsk.co/address/' },
  31: { addressBaseURL: 'https://explorer.testnet.rsk.co/address/' },
}

export const GlobalContextProvider = ({ children }) => {
  const [signer, setSigner] = useState()
  const [rLogin, setrLogin] = useState()
  const [disconnect, setDisconnect] = useState()

  const router = useRouter()

  useEffect(() => {
    async function init() {
      const RLogin = (await import('@rsksmart/rlogin')).default
      const rLogin = new RLogin({
        providerOptions: {
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              rpc: rpcUrls,
            },
          },
        },
        rpcUrls,
        supportedChains,
        infoOptions,
      })

      setrLogin(rLogin)
    }
    init()
  }, [])

  const login = () => {
    rLogin.connect().then(({ provider, disconnect }) => {
      setDisconnect(disconnect)
      const newProvider = new providers.Web3Provider(provider)
      newProvider
        .getSigner(0)
        .getAddress()
        .then((signer) => {
          setSigner(signer)
          router.push(routes.tokens)
        })
    })
  }

  const logout = async () => {
    await disconnect
    setSigner(null)
  }

  return (
    <GlobalContext.Provider
      value={{
        login,
        logout,
        signer,
        setSigner,
        rLogin,
        setrLogin,
        disconnect,
        setDisconnect,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
