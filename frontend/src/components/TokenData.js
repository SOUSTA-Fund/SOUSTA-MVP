import React from 'react'

export function TokenData({ numTokens, tokens }) {
  const addresses = Object.keys(tokens)

  return (
    <div>
      <h4>Current SOUSTA Tokens</h4>
      <p>Total Number of Tokens: {numTokens}</p>
      {!!addresses.length && (
        <ul className="list-group">
          {addresses.map((address) => (
            <li className="list-group-item">
              <h5>Token Name: {tokens[address]['name']}</h5>
              <div>Symbol: {tokens[address]['symbol']}</div>
              <div>Total Supply: {tokens[address]['totalSupply']}</div>
              <div>Contract Address: {address}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
