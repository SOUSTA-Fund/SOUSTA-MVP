'use client'

export default function Mint() {
  return (
    <div className="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
      <div className="flex flex-col flex-wrap sm:flex-row ">
        <div className="w-full sm:w-1/2 xl:w-1/3">
          <div className="mb-4">
            <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
              <div>
                <div className="flex flex-col mb-4">
                  <span className="font-bold text-black text-md dark:text-white">
                    Mint SOUSTA Token
                  </span>
                </div>
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
                  <div className="flex flex-col mb-4">
                    <label className="mb-2 text-gray-500 text-sm">
                      Token Name
                    </label>
                    <input
                      className="rounded-md"
                      type="text"
                      name="name"
                      required
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label className="mb-2 text-gray-500 text-sm">
                      Token Ticker
                    </label>
                    <input
                      className="rounded-md"
                      type="text"
                      name="ticker"
                      required
                    />
                  </div>
                  <div className="flex flex-col mb-6">
                    <label className="mb-2 text-gray-500 text-sm">
                      Initial Token Supply
                    </label>
                    <input
                      className="rounded-md"
                      type="number"
                      step="1"
                      name="supply"
                      placeholder="1"
                      required
                    />
                  </div>
                  <div className="">
                    <input
                      className="flex items-center px-6 py-2 font-semibold hover:cursor-pointer text-white bg-zinc-800 rounded-md"
                      type="submit"
                      value="Mint"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
