import { BaseERC721Nft } from "./trending-erc721-tokens";

export interface TopERC721Token extends BaseERC721Nft {
  average_price: string;
  average_price_usd: string;
  floor_price_7d_percent_change: string;
  floor_price_30d_percent_change: string;
  floor_price_usd_7d_percent_change: string;
  floor_price_usd_30d_percent_change: string;
}