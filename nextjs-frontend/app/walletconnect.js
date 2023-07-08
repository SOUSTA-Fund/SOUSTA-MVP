'use client'

import { providers } from 'ethers'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

const rpcUrls = {
  30: 'https://public-node.rsk.co',
  31: 'https://public-node.testnet.rsk.co',
}

const supportedChains = Object.keys(rpcUrls).map(Number)

const infoOptions = {
  30: { addressBaseURL: 'https://explorer.rsk.co/address/' },
  31: { addressBaseURL: 'https://explorer.testnet.rsk.co/address/' },
}

export default function WalletConnect() {
  const router = useRouter()
  const signer = Cookies.get('signer')
  let rLogin

  const login = (RLogin) => {
    rLogin = new RLogin({
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

    if (!signer) {
      rLogin.connect().then(({ provider, disconnect }) => {
        console.log(disconnect)
        const newProvider = new providers.Web3Provider(provider)
        newProvider
          .getSigner(0)
          .getAddress()
          .then((signer) => {
            Cookies.set('signer', signer, { expires: 1 })
            router.push('/dashboard/overview')
          })
      })
    } else {
      router.push('/dashboard/overview')
    }
  }

  return (
    <button
      onClick={async () => {
        const RLogin = (await import('@rsksmart/rlogin')).default
        login(RLogin)
      }}
      className="bg-zinc-800 px-8 py-4 rounded text-white dark:bg-white dark:text-zinc-800"
    >
      Connect Wallet
    </button>
  )
}
