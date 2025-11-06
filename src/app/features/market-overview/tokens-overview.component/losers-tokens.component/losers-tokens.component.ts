import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MarketDataService } from '@services/market-data.service';
import { TokensOverviewTableComponent } from '../tokens-overview-table.component/tokens-overview-table.component';

@Component({
  selector: 'app-losers-tokens',
  imports: [ TokensOverviewTableComponent ],
  templateUrl: './losers-tokens.component.html',
  styleUrl: './losers-tokens.component.scss'
})
export class LosersTokensComponent {
  private marketDataService = inject(MarketDataService);
  public tokensList = toSignal(this.marketDataService.losersERC20TokensList$, { initialValue: [] });
  
  constructor() {
    this.marketDataService.fetchLosersERC20Tokens();
  }
}
