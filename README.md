# SOUSTA Asset Tokenization

This repository contains the contracts and frontend Dapp to demonstrate how a
SOUSTA fund manager would deploy and interact with an asset token on the
Rootstock test network.

## Quick start

The first things you need to do are cloning this repository and installing its
dependencies:

```sh
git clone https://github.com/gp22/SOUSTA-MVP.git
cd SOUSTA-MVP
yarn install
```

Once installed, let's run Hardhat's testing network:

```sh
npx hardhat node
```

Then, on a new terminal, go to the repository's root folder and run this to
deploy the contract:

```sh
npx hardhat run scripts/deploy.js --network localhost
```

To deploy the contract to the Rootstock test network (with this option you
don't need to run the Hardhat test network or deploy to localhost):

```sh
npx hardhat run scripts/deploy.js --network rsktestnet
```

Finally, we can run the frontend with:

```sh
cd frontend
yarn install
yarn run dev
```

Open [http://localhost:3000/](http://localhost:3000/) to see the Dapp. You will
need to have [Metamask](https://metamask.io) installed and listening on
`localhost 8545` if you're using the Hardhat test network.

If you deployed to the Rootstock test network you'll need to
[add it](https://dev.rootstock.io/wallet/use/metamask/) to your
[Metamask](https://metamask.io).

Then you'll need to go to the [RSK Faucet](https://faucet.rsk.co/) to get
tRBTC to use for testing.

## Testing

To run the Hardhat test suite to test the contracts:

```sh
yarn run test
```

To generate a test coverage report:

```sh
yarn run coverage
```

## Next.js Dapp

The `frontend` directory has the Dapp to interact with the contracts, built
using [Next.js](https://nextjs.org/).

### Running the Dapp

The Dapp uses [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To run it, you just need to execute `yarn run dev` in the `frontend` directory
in a terminal, and open [http://localhost:3000](http://localhost:3000).

### Architecture of the Dapp

The Dapp consists of multiple React Components, which you can find in
`frontend/app`.

Most of them are presentational components.

The logic for connecting [Metamask](https://metamask.io) to the Rootstock
network and maintaining global state is in `frontend/app/context/store.js`.

The main logic for interacting with the contracts and maintaining dashboard
state is in `frontend/app/dashboard/store.js`.

There's also logic for minting tokens in `frontend/app/dashboard/mint/page.js`,
and interacting with minted tokens in
`frontend/app/dashboard/tokens/[address]/page.js`.

### Contracts

The contract addresses and ABI's are in the `frontend/contracts/compiled`
directory. They are compiled and copied to this directory when you run either
of the Hardhat deploy scripts above.

The `frontend/contracts/vendor` directory contains the ABI for interacting
with the ERC20 token. It's an [OpenZeppelin ERC20 token contract](https://docs.openzeppelin.com/contracts/4.x/erc20)
and is here because it isn't compiled by Hardhat. So it needs to live in the
repository.
