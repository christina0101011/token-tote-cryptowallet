export interface BaseERC721Nft {
  collection_address: string;
  collection_image: string;
  collection_title: string;
  floor_price: string;
  floor_price_24hr_percent_change: string;
  floor_price_usd: string;
  floor_price_usd_24hr_percent_change: string;
  rank: number;
  volume_24hr_percent_change: string;
  volume_usd: string;
}

export interface TrendingERC721Token extends BaseERC721Nft {
  market_cap_24hr_percent_change: string;
  market_cap_usd: string;
}