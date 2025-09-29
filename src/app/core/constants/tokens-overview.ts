import { PopularTokensComponent } from "../../features/market-overview/tokens-overview.component/popular-tokens.component/popular-tokens.component";
import { GainersTokensComponent } from "../../features/market-overview/tokens-overview.component/gainers-tokens.component/gainers-tokens.component";
import { LosersTokensComponent } from "../../features/market-overview/tokens-overview.component/losers-tokens.component/losers-tokens.component";

export const TOKENS_OVERVIEW = [
  {
    label: 'Popular',
    icon: 'assets/icons/trophy.svg',
    component: PopularTokensComponent,
  },
  {
    label: 'Gainers',
    icon: 'assets/icons/trending.svg',
    component: GainersTokensComponent,
  },
  {
    label: 'Losers',
    icon: 'assets/icons/trending.svg',
    component: LosersTokensComponent,
  }
]