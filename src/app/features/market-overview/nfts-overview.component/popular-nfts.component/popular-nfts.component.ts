import { Component, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MarketDataService } from '@services/market-data.service';
import { NFTOverviewTableComponent } from "../nft-overview-table.component/nft-overview-table.component";
import { TopERC721Token } from '@market-interfaces/top-erc721-tokens';

@Component({
  selector: 'app-popular-nfts.component',
  imports: [NFTOverviewTableComponent],
  templateUrl: './popular-nfts.component.html',
  styleUrl: './popular-nfts.component.scss'
})
export class PopularNftsComponent {
  private marketDataService = inject(MarketDataService);
  public tokensList: Signal<TopERC721Token[]> = toSignal(this.marketDataService.topERC721NFTsList$, { initialValue: [] });
  
  constructor() {
    this.marketDataService.fetchTopERC721NFTTokens();
    this.marketDataService.topERC721NFTsList$.subscribe((res: any) => console.log(55,res));
  }
}
