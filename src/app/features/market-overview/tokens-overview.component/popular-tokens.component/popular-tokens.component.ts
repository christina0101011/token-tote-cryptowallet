import { Component, inject } from '@angular/core';
import { MarketDataService } from '@services/market-data.service';
import { TokensOverviewTableComponent } from '../tokens-overview-table.component/tokens-overview-table.component';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-popular-tokens',
  imports: [ TokensOverviewTableComponent ],
  templateUrl: './popular-tokens.component.html',
  styleUrls: ['./popular-tokens.component.scss']
})

export class PopularTokensComponent {
  private marketDataService = inject(MarketDataService);
  public tokensList = toSignal(this.marketDataService.topErc20TokensList$, { initialValue: [] });

  constructor() {
    this.marketDataService.fetchTopERC20TokensByMarketCap();
  }

}