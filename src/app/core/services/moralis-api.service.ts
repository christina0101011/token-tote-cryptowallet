import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoralisApiService {
  private readonly baseUrl = 'https://deep-index.moralis.io/api/v2';
  private readonly apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjMyYWUwNjljLTQ1ODAtNDNhZi1hMDk4LTRmMTg5MGRhNTA2ZSIsIm9yZ0lkIjoiNDYzNDQxIiwidXNlcklkIjoiNDc2Nzg2IiwidHlwZUlkIjoiNThkNTk2NWUtZTUyOS00MDJkLWIwNmMtNDc5Njg3ZmY0MjM3IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTQ0MTc0MTUsImV4cCI6NDkxMDE3NzQxNX0.BpMWsyMBHbkkQ35rQ5jf8UqRmrw_hPeOHsue-rUpnLk';  // Replace with your key

  constructor(private http: HttpClient) {}

  getTopTockens(): Observable<any> {
    const url = `${this.baseUrl}/market-data/erc20s/top-tokens`;
    const headers = new HttpHeaders({
      'X-API-Key': this.apiKey
    });

    const params = new HttpParams();

    return this.http.get(url, { headers, params });
  }

  getBalance(): Observable<any> {
    const url = `https://deep-index.moralis.io/api/v2.2/wallets/0xCb613F356C60E66405a0A9f51838415A21AAba32/tokens`;
    const headers = new HttpHeaders({
      'X-API-Key': this.apiKey
    });

    const params = new HttpParams();

    return this.http.get(url, { headers, params });
// Response body
// {
//   "address": "0xcb613f356c60e66405a0a9f51838415a21aaba32",
//   "active_chains": [
//     {
//       "chain": "eth",
//       "chain_id": "0x1",
//       "first_transaction": null,
//       "last_transaction": null
//     }
//   ]
// }
  }

  getWalletNFTs(address: string, chain: string = 'eth'): Observable<any> {
    const url = `${this.baseUrl}/wallets/${address}/chains?chains=${chain}`; 
    const headers = new HttpHeaders({
      'X-API-Key': this.apiKey
    });

    const params = new HttpParams()
      .set('chain', chain)

    return this.http.get(url, { headers, params });
//     Response body
// {
//   "address": "0xcb613f356c60e66405a0a9f51838415a21aaba32",
//   "active_chains": [
//     {
//       "chain": "eth",
//       "chain_id": "0x1",
//       "first_transaction": null,
//       "last_transaction": null
//     }
//   ]
// }
  }
}