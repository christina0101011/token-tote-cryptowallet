import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MarketDataService } from '@services/market-data.service';
import { NFTOverviewTableComponent } from "../nft-overview-table.component/nft-overview-table.component";
import { TrendingERC721Token } from '@market-interfaces/trending-erc721-tokens';

@Component({
  selector: 'app-trending-nfts.component',
  imports: [NFTOverviewTableComponent],
  templateUrl: './trending-nfts.component.html',
  styleUrl: './trending-nfts.component.scss'
})
export class TrendingNftsComponent {
  private marketDataService = inject(MarketDataService);
  public tokensList = toSignal(this.marketDataService.hottestERC721NFTsList$, { initialValue: [] });
  
  constructor() {
    this.marketDataService.fetchHottestERC721NFTTokens();
    this.marketDataService.hottestERC721NFTsList$.subscribe((res) => console.log(888, res));
  }
}
