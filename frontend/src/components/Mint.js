import React from 'react'

export function Mint({ deployToken }) {
  return (
    <div>
      <h4>Mint SOUSTA Token</h4>
      <form
        onSubmit={(event) => {
          // This function just calls the deployToken callback with the
          // form's data.
          event.preventDefault()

          const formData = new FormData(event.target)
          const name = formData.get('name')
          const ticker = formData.get('ticker')
          const supply = formData.get('supply')

          if (name && ticker && supply) {
            deployToken(name, ticker, supply)
          }
        }}
      >
        <div className="form-group">
          <label>Token Name</label>
          <input className="form-control" type="text" name="name" required />
        </div>
        <div className="form-group">
          <label>Token Ticker</label>
          <input className="form-control" type="text" name="ticker" required />
        </div>
        <div className="form-group">
          <label>Initial Token Supply</label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="supply"
            placeholder="1"
            required
          />
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Mint" />
        </div>
      </form>
    </div>
  )
}
