import { parseAbi } from "viem";

// main_control facade — only the fragments actually called by the app.
// owner / renounceOwnership / transferOwnership and every other admin-only
// function are intentionally excluded: the frontend never calls them, and no
// event listeners are wired up so events are omitted too.
export const swapAbi = parseAbi([
  // views — state vars & getters
  "function testEthAddress() view returns (address)",
  "function litvmToken() view returns (address)",
  "function staking() view returns (address)",
  "function getRegisteredTokens() view returns (address[])",
  "function contract_to_paird_address(address) view returns (address)",
  "function getPriceByAddress(address paird_address) view returns (int256)",
  "function getSwapQuote(address fromToken, address toToken, uint256 amountIn) view returns (uint256)",
  // staking facade views
  "function stakedOf(address user) view returns (uint256)",
  "function pendingStakingRewards(address user) view returns (uint256)",
  "function totalStaked() view returns (uint256)",
  "function rewardRatePerSecond() view returns (uint256)",
  "function claimUnlocksIn(address user) view returns (uint256)",

  // writes
  "function bridgeToTestEth() payable",
  "function bridgeFromTestEth(uint256 amount)",
  "function swap(address fromToken, address toToken, uint256 amountIn, uint256 amountOutMin, uint256 deadline) returns (uint256 amountOut)",
  // staking facade writes
  "function stakeNative() payable",
  "function unstakeNative(uint256 amount)",
  "function claimStakingRewards() returns (uint256)",
]);

// Minimal ERC20 — only the fragments the app calls on token contracts.
// `approve` is the one direct token-write the frontend makes (everything else
// goes through main_control). No Transfer event — no listener uses it.
export const erc20Abi = parseAbi([
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address owner) view returns (uint256)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function approve(address spender, uint256 value) returns (bool)",
]);
