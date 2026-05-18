# LiteForge DEX

Live site: **https://liteforgedex.com**

LiteForge is the native DEX of **LitVM LiteForge** — an EVM rollup that pulls its security from Litecoin's proof-of-work. You can swap tokens, bridge real LTC in via the Grail bridge, stake LITVM for a cut of sequencer fees, and even spin up your own ERC20 in one transaction.

This repo is the frontend.

## What's inside

- **Swap** — trade any registered ERC20 against zkLTC, sub-second settlement, oracle-backed pricing
- **Bridge** — move real Litecoin into zkLTC trustlessly via BitcoinOS Grail (no wrapped custodians, no multisig)
- **Stake** — lock LITVM and earn a proportional share of sequencer fee revenue, paid in zkLTC
- **Forge** — deploy capped, burnable, pausable ERC20s in a single tx, instantly listable
- **Airdrop** — snapshot-based distribution with on-chain eligibility, tiered into Forgemaster / Ember / Spark
- **Activity** — full per-wallet history (swaps, bridges, stakes) with real-time volume

## Network

| | |
|---|---|
| Chain | LitVM LiteForge testnet |
| Chain ID | 4441 |
| Rollup | Arbitrum Orbit, EVM-equivalent (Shanghai) |
| Gas token | zkLTC — 1:1 with LTC, 18 decimals |
| Block time | ~0.4s |
| Explorer | https://liteforge.explorer.caldera.xyz |

## Tech

Next.js 14 (App Router), Tailwind, RainbowKit, wagmi, viem, TypeScript. Deployed to Cloudflare Pages.

## Running locally

```bash
yarn install
yarn dev
```

Then drop a `.env.local` in the root with:

```
NEXT_PUBLIC_CHAIN_ID=4441
NEXT_PUBLIC_RPC_URL=https://liteforge.rpc.caldera.xyz/http
```

Other useful scripts:

- `yarn build` — production build
- `yarn pages:preview` — Cloudflare Pages local preview
- `yarn pages:deploy` — deploy to Cloudflare

## Contributing

Issues and PRs are welcome. For anything bigger than a typo fix, open an issue first so we can talk it through.

## Contact

x [@ssomethingg00](https://x.com/ssomethingg00)
