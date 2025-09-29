import { Routes } from '@angular/router';
import { WalletsComponent } from './features/accounts/decentralizad/wallets/wallets';
import { MarketOverviewComponent } from './features/market-overview/market-overview.component';
import { NftsOverviewComponent } from './features/market-overview/nfts-overview.component/nfts-overview.component';
import { TokensOverviewComponent } from './features/market-overview/tokens-overview.component/tokens-overview.component';
import { TaxHubComponent } from './features/tax-hub/tax-hub';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', component: MarketOverviewComponent },
  { path: 'accounts', component: WalletsComponent },
  { path: 'market', 
    component: MarketOverviewComponent,
    children: [
      { path: 'tokens', component: TokensOverviewComponent },
      { path: 'nfts', component: NftsOverviewComponent},
      { path: '', redirectTo: 'tokens', pathMatch: 'full' }
    ],
   },
  // { path: 'accounts',
  //   children: [
  //     { path: 'decentralized', component: ConnectWallet },
  //     { path: 'centralized', component: AdminTeamsComponent },
  //   ],
  // },
  { path: 'taxes', component: TaxHubComponent },
  { path: '**', component: PageNotFoundComponent }
];
