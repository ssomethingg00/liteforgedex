# LiteForge DEX

Live site: **https://liteforgedex.com**
<img width="881" height="528" alt="image" src="https://github.com/user-attachments/assets/405948a0-d86b-435e-ac5e-2afe2a8b44df" />


LiteForge is the native DEX of **LitVM LiteForge** — an EVM rollup that pulls its security from Litecoin's proof-of-work. You can swap tokens, bridge real LTC in via the Grail bridge, stake LITVM for a cut of sequencer fees, and even spin up your own ERC20 in one transaction.

This repo is the frontend.
<img width="837" height="437" alt="image" src="https://github.com/user-attachments/assets/7cbadfaf-a443-42e5-9a69-5e8f26293fc8" />


## What's inside

- **Swap** — trade any registered ERC20 against zkLTC, sub-second settlement, oracle-backed pricing
  <img width="764" height="548" alt="image" src="https://github.com/user-attachments/assets/f2f3fb06-3042-4745-810a-39d79a28e470" />

- **Bridge** — move real Litecoin into zkLTC trustlessly via BitcoinOS Grail (no wrapped custodians, no multisig)
  <img width="766" height="700" alt="image" src="https://github.com/user-attachments/assets/3314d28f-4a21-43c7-a6ad-71aee86848d3" />

- **Stake** — lock LITVM and earn a proportional share of sequencer fee revenue, paid in zkLTC
- <img width="1113" height="751" alt="image" src="https://github.com/user-attachments/assets/a1aeb27d-dfb3-4b9b-8f6b-3e78d6b0a36e" />

- **Forge** — deploy capped, burnable, pausable ERC20s in a single tx, instantly listable
- **Airdrop** — snapshot-based distribution with on-chain eligibility, tiered into Forgemaster / Ember / Spark
  <img width="843" height="631" alt="image" src="https://github.com/user-attachments/assets/0cec25d2-a95e-4d9c-9d21-0e869d82d34d" />

- **Activity** — full per-wallet history (swaps, bridges, stakes) with real-time volume

<img width="965" height="776" alt="image" src="https://github.com/user-attachments/assets/c9711287-5f80-4537-ae0e-6eac0e169e33" />


## Network

| | |
|---|---|
| Chain | LitVM LiteForge testnet |
| Chain ID | 4441 |
| Rollup | Arbitrum Orbit, EVM-equivalent (Shanghai) |
| Gas token | zkLTC — 1:1 with LTC, 18 decimals |
| Block time | ~0.4s |
| Explorer | https://liteforge.explorer.caldera.xyz |
<img width="1117" height="452" alt="image" src="https://github.com/user-attachments/assets/29d2b5b9-7abf-4692-83e4-4709c4bb06cb" />

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


## Contributing

Issues and PRs are welcome. For anything bigger than a typo fix, open an issue first so we can talk it through.
<img width="1329" height="605" alt="image" src="https://github.com/user-attachments/assets/36c4db6a-cf51-416d-b09c-5e4a65ac75c6" />

## Contact

- Telegram — [t.me/liteforgedex](https://t.me/liteforgedex)
- x [@ssomethingg00](https://x.com/ssomethingg00)

