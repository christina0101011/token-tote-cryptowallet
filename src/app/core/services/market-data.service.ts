import { Erc20Token, TrendingErc20TokensInterface } from '@market-interfaces/top-erc20-tokens';
import { TopERC721Token } from '@market-interfaces/top-erc721-tokens';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TrendingERC721Token } from '@market-interfaces/trending-erc721-tokens';

@Injectable({
  providedIn: 'root'
})

export class MarketDataService {
  private _topErc20TokensListSubject = new BehaviorSubject<Erc20Token[]>([]);
  public topErc20TokensList$ = this._topErc20TokensListSubject.asObservable();
  
  private _gainersERC20TokensListSubject = new BehaviorSubject<Erc20Token[]>([]);
  public gainersERC20TokensList$ = this._gainersERC20TokensListSubject.asObservable();

  private _losersERC20TokensListSubject = new BehaviorSubject<Erc20Token[]>([]);
  public losersERC20TokensList$ = this._losersERC20TokensListSubject.asObservable();

  private _topERC721NFTsListSubject = new BehaviorSubject<TopERC721Token[]>([]);
  public topERC721NFTsList$ = this._topERC721NFTsListSubject.asObservable();

  private _hottestERC721NFTsListSubject = new BehaviorSubject<TrendingERC721Token[]>([]);
  public hottestERC721NFTsList$ = this._hottestERC721NFTsListSubject.asObservable();

  private readonly baseUrl = 'https://deep-index.moralis.io/api/v2';
  private readonly apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjMyYWUwNjljLTQ1ODAtNDNhZi1hMDk4LTRmMTg5MGRhNTA2ZSIsIm9yZ0lkIjoiNDYzNDQxIiwidXNlcklkIjoiNDc2Nzg2IiwidHlwZUlkIjoiNThkNTk2NWUtZTUyOS00MDJkLWIwNmMtNDc5Njg3ZmY0MjM3IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTQ0MTc0MTUsImV4cCI6NDkxMDE3NzQxNX0.BpMWsyMBHbkkQ35rQ5jf8UqRmrw_hPeOHsue-rUpnLk';  // Replace with your key

  constructor(private http: HttpClient) {}
  
  fetchTopERC20TokensByMarketCap(): void {
    if (this._topErc20TokensListSubject.value && this._topErc20TokensListSubject.value.length > 0) {
      return;
    }
    const url = `${this.baseUrl}/market-data/erc20s/top-tokens`;
    const headers = new HttpHeaders({ 'X-API-Key': this.apiKey });

    this.http.get<Erc20Token[]>(url, { headers })
    .subscribe({
      next: (tokens) => this._topErc20TokensListSubject.next(tokens),
      error: (err) => console.error('Error fetching tokens:', err)
    });
  }
  
  fetchGainingERC20Tokens(): void {
    if (this._gainersERC20TokensListSubject.value && this._gainersERC20TokensListSubject.value.length > 0) {
      return;
    }
    const url = `${this.baseUrl}/market-data/erc20s/top-movers`;
    const headers = new HttpHeaders({ 'X-API-Key': this.apiKey });

    this.http.get<TrendingErc20TokensInterface>(url, { headers })
    .subscribe({
      next: (tokens: any) => {
        this._gainersERC20TokensListSubject.next(tokens.gainers);
      },
      error: (err) => console.error('Error fetching tokens:', err)
    });
  }

  fetchLosersERC20Tokens(): void {
    if (this._losersERC20TokensListSubject.value && this._losersERC20TokensListSubject.value.length > 0) {
      return;
    }
    const url = `${this.baseUrl}/market-data/erc20s/top-movers`;
    const headers = new HttpHeaders({ 'X-API-Key': this.apiKey });

    this.http.get<TrendingErc20TokensInterface>(url, { headers })
    .subscribe({
      next: (tokens: any) => {
        this._losersERC20TokensListSubject.next(tokens.losers);
      },
      error: (err) => console.error('Error fetching tokens:', err)
    });
  }

  fetchTopERC721NFTTokens(): void {
    if (this._topERC721NFTsListSubject.value && this._topERC721NFTsListSubject.value.length > 0) {
      return;
    }
    const url = `${this.baseUrl}/market-data/nfts/top-collections`;
    const headers = new HttpHeaders({ 'X-API-Key': this.apiKey });

    this.http.get<TopERC721Token[]>(url, { headers })
    .subscribe({
      next: (tokens: TopERC721Token[]) => {
        this._topERC721NFTsListSubject.next(tokens);
      },
      error: (err) => console.error('Error fetching tokens:', err)
    });
  }

  fetchHottestERC721NFTTokens(): void {
    if (this._hottestERC721NFTsListSubject.value && this._hottestERC721NFTsListSubject.value.length > 0) {
      return;
    }
    const url = `${this.baseUrl}/market-data/nfts/hottest-collections`;
    const headers = new HttpHeaders({ 'X-API-Key': this.apiKey });

    this.http.get<TrendingERC721Token>(url, { headers })
    .subscribe({
      next: (tokens: any) => {
        this._hottestERC721NFTsListSubject.next(tokens);
      },
      error: (err) => console.error('Error fetching tokens:', err)
    });
  }

}
