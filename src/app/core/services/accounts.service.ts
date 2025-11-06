import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  private readonly baseUrl = 'https://deep-index.moralis.io/api/v2';
  private readonly apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjMyYWUwNjljLTQ1ODAtNDNhZi1hMDk4LTRmMTg5MGRhNTA2ZSIsIm9yZ0lkIjoiNDYzNDQxIiwidXNlcklkIjoiNDc2Nzg2IiwidHlwZUlkIjoiNThkNTk2NWUtZTUyOS00MDJkLWIwNmMtNDc5Njg3ZmY0MjM3IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTQ0MTc0MTUsImV4cCI6NDkxMDE3NzQxNX0.BpMWsyMBHbkkQ35rQ5jf8UqRmrw_hPeOHsue-rUpnLk';  // Replace with your key

  constructor(private http: HttpClient) {}
  private _isLoading = signal(false);
  readonly isLoading = this._isLoading.asReadonly();

  private _error = signal<string | null>(null);
  readonly error = this._error.asReadonly();

  private _balance = signal<any>(null);
  readonly balance = this._balance.asReadonly();

  getBalance(address: string) {
  if (this._balance()) {
    return;
  }

  this._isLoading.set(true);
  this._error.set(null);

  const url = `${this.baseUrl}/${address}/balance`;
  const headers = new HttpHeaders({ 'X-API-Key': this.apiKey });

  this.http.get<any>(url, { headers }).subscribe({
    next: (balance) => this._balance.set(balance),
    error: (err) => {
      console.error('Error fetching balance:', err);
      this._error.set('Error fetching balance');
      this._isLoading.set(false);
    },
    complete: () => this._isLoading.set(false),
  });
  
  }

  getWalletNFTs(address: string): Observable<any> {
    const url = `${this.baseUrl}/${address}/erc20`; 
    const headers = new HttpHeaders({
      'X-API-Key': this.apiKey
    });
    const params = new HttpParams()
    return this.http.get(url, { headers, params });
  }
}