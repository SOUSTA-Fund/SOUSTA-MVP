'use client'

import { useGlobalContext } from './context/store'

export default function WalletConnect() {
  const { login, logout, signer } = useGlobalContext()

  return (
    <button
      onClick={() => {
        !!signer ? logout() : login()
      }}
      className="bg-gray-900 font-semibold px-8 py-4 rounded text-white dark:bg-white dark:text-gray-900"
    >
      {!!signer ? 'Disconnect Wallet' : 'Connect Wallet'}
    </button>
  )
}
