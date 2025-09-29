import { Component, ViewChild } from '@angular/core';
import { MARKET_TABS } from '../../core/constants/navigation-items';
import { MatTabNav, MatTabsModule } from '@angular/material/tabs';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-market-overview',
  imports: [ MatTabsModule, MatTabNav, RouterModule ],
  templateUrl: './market-overview.component.html',
  styleUrl: './market-overview.component.scss'
})
export class MarketOverviewComponent {
  @ViewChild('tabPanel', { static: true }) tabPanel!: MatTabNav;

  public tabs = MARKET_TABS;

  constructor(private router: Router) {}

}
