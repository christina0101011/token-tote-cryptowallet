export interface Erc20Token {
  market_cap_usd: number;
  price_7d_percent_change: number;
  price_24h_percent_change: number;
  price_usd: string;
  token_decimals: number;
  token_logo: string;
  token_name: string;
  token_symbol: string;
  contract_address?: string;
}

export interface TrendingErc20TokensInterface {
  gainers: Erc20Token[];
  losers: Erc20Token[];
}