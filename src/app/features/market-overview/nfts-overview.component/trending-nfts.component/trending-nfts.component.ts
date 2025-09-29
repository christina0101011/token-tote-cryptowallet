import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MarketDataService } from '@services/market-data.service';

@Component({
  selector: 'app-trending-nfts.component',
  imports: [],
  templateUrl: './trending-nfts.component.html',
  styleUrl: './trending-nfts.component.scss'
})
export class TrendingNftsComponent {
  private marketDataService = inject(MarketDataService);
  public tokensList = toSignal(this.marketDataService.hottestERC721NFTsList$, { initialValue: [] });
  
  constructor() {
    this.marketDataService.fetchHottestERC721NFTTokens();
  // this.marketDataService.hottestERC721NFTsList$.subscribe((res: any) => console.log(res));
  }
}
