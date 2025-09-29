import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, effect, inject, input, ViewChild } from '@angular/core';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TopERC721Token } from '@market-interfaces/top-erc721-tokens';
import { TrendingERC721Token } from '@market-interfaces/trending-erc721-tokens';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nft-overview-table',
  imports: [ 
    MatTableModule, 
    MatSortModule, 
    MatProgressSpinnerModule,
    CommonModule 
   ],
  templateUrl: './nft-overview-table.component.html',
  styleUrl: './nft-overview-table.component.scss'
})
export class NFTOverviewTableComponent implements AfterViewInit {
  private _liveAnnouncer = inject(LiveAnnouncer);
  public tokensList = input.required<TopERC721Token[]| TrendingERC721Token[]>();
  public tableData = new MatTableDataSource<TopERC721Token | TrendingERC721Token>([]);
  public loading: boolean = true;
  public displayedColumns: string[] = ['collection', 'market_cap_usd', 'floor_price', 'floor_price_usd', '1D_volume', '1D_cap'];
  
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) matTable!: MatTable<any>;

  constructor() {
    effect(() => {
      this.tableData.data = this.tokensList();
      if (this.tokensList().length) {
        this.loading = false;
      }
    });
  }
  
  ngAfterViewInit(): void {
    this.tableData.sort = this.sort;
    this.setCustomSortAccessors();
  }

  private setCustomSortAccessors(): void {
    this.tableData.sortingDataAccessor = (data: unknown, property: string): string | number => {
      const item = data as TopERC721Token & TrendingERC721Token;
      switch (property) {
        case 'collection': return item.collection_title?.toLowerCase() ?? '';
        case 'market_cap_usd': return Number(item.market_cap_usd);
        case '1D_volume': return Number(item.volume_24hr_percent_change);
        case '1D_cap': return Number(item.market_cap_24hr_percent_change);
        case 'floor_price': return Number(item.floor_price);
        case 'floor_price_usd': return Number(item.floor_price_usd);
        default: return (item as any)[property];
      }
    };
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort): void {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
