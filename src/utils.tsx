import { connect } from "near-api-js";
import { FailoverRpcProvider, JsonRpcProvider } from "near-api-js/lib/providers";

export function truncateString(str: string, length: number) {
  if (str.length - 3 > length) {
    return str.substring(0, length) + "…";
  }
  return str;
}

export type TokenData = {
  account_id: string;
  circulating_supply: string;
  circulating_supply_excluding_team: string;
  total_supply: string;
  deleted: boolean;
  main_pool: string;
  price_usd: string;
  price_usd_raw: string;
  reputation: string;
  metadata: TokenMetadata;
};

export type TokenMetadata = {
  name: string;
  symbol: string;
  decimals: number;
};

const tokenMeta: { [key: string]: TokenMetadata } = {};

export async function getTokenMetadata(tokenId: string): Promise<TokenMetadata> {
  if (tokenId === "near") {
    return {
      name: "NEAR",
      symbol: "NEAR",
      decimals: 24,
    }
  }
  if (Object.entries(tokenMeta).length === 0) {
    const response = await fetch("https://prices.intear.tech/tokens")
      .then((response) => response.json())
      .then((data) => Object.fromEntries(Object.entries(data).map(([tokenId, data]: [string, any]) => [tokenId, (data as TokenData).metadata])));
    Object.assign(tokenMeta, response);
  }
  return tokenMeta[tokenId] ?? {
    name: "Unknown",
    symbol: "UNKNOWN",
    decimals: 0,
  }
}

const jsonProviders = [
  new JsonRpcProvider({
    url: 'https://rpc.shitzuapes.xyz',
  }),
  new JsonRpcProvider({
    url: 'https://rpc.mainnet.near.org',
  }),
  new JsonRpcProvider({
    url: 'https://near.lava.build',
  }),
];
export const nearProvider = new FailoverRpcProvider(jsonProviders);

export async function getNear() {
  return await connect({
    networkId: 'mainnet',
    provider: nearProvider,
    nodeUrl: 'https://rpc.mainnet.near.org',
  })
}
