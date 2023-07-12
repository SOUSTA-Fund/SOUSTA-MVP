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
