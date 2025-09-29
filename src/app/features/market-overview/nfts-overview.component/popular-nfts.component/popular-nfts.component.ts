import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MarketDataService } from '@services/market-data.service';

@Component({
  selector: 'app-popular-nfts.component',
  imports: [],
  templateUrl: './popular-nfts.component.html',
  styleUrl: './popular-nfts.component.scss'
})
export class PopularNftsComponent {
  private marketDataService = inject(MarketDataService);
  public tokensList = toSignal(this.marketDataService.topERC721NFTsList$, { initialValue: [] });
  
  constructor() {
    this.marketDataService.fetchTopERC721NFTTokens();
    this.marketDataService.topERC721NFTsList$.subscribe((res: any) => console.log(res));
  }
}
