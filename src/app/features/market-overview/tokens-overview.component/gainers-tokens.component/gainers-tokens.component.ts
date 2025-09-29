import { Component, inject, signal } from '@angular/core';
import { MarketDataService } from '@services/market-data.service';
import { TokensOverviewTableComponent } from '../tokens-overview-table.component/tokens-overview-table.component';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-gainers-tokens',
  imports: [ TokensOverviewTableComponent ],
  templateUrl: './gainers-tokens.component.html',
  styleUrl: './gainers-tokens.component.scss'
})
export class GainersTokensComponent {
  private marketDataService = inject(MarketDataService);
  public tokensList = toSignal(this.marketDataService.gainersERC20TokensList$, { initialValue: [] });
  
  constructor() {
    this.marketDataService.fetchGainingERC20Tokens();
  }

}
