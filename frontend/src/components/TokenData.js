import React from 'react'

export function TokenData({ numTokens, tokenAddresses }) {
  return (
    <div>
      <h4>SOUSTA Token Data</h4>
      <p>Total Number of Tokens: {numTokens}</p>
      {!!tokenAddresses.length && (
        <ul className="list-group">
          {tokenAddresses.map((address) => (
            <li className="list-group-item">{address}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
