import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, effect, inject, input, ViewChild } from '@angular/core';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Erc20Token } from '@market-interfaces/top-erc20-tokens';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-tokens-overview-table',
  imports: [ MatTableModule, MatSortModule, MatProgressSpinnerModule ],
  templateUrl: './tokens-overview-table.component.html',
  styleUrl: './tokens-overview-table.component.scss'
})
export class TokensOverviewTableComponent implements AfterViewInit {
  private _liveAnnouncer = inject(LiveAnnouncer);
  public tableData = new MatTableDataSource<Erc20Token>([]);

  public tokensList = input.required<Erc20Token[]>();
  public loading: boolean = true;
  public displayedColumns: string[] = ['symbol', 'logo', 'name', 'day', 'week', 'price'];
  
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) matTable!: MatTable<any>;

  constructor() {
    effect(() => {
      this.tableData.data = this.tokensList();; 
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
      const item = data as Erc20Token;
      switch (property) {
        case 'day': return Number(item.price_24h_percent_change);
        case 'week': return Number(item.price_7d_percent_change);
        case 'price': return Number(item.price_usd);
        case 'symbol': return item.token_symbol?.toLowerCase() ?? '';
        case 'name': return item.token_name?.toLowerCase() ?? '';
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
