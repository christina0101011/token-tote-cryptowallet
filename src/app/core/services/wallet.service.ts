import { Inject, Injectable, signal } from '@angular/core';
import Web3 from 'web3';
import { BehaviorSubject, catchError, from, map, Observable, of, tap } from 'rxjs';

declare global {
  interface Window {
    ethereum?: any;
    web3?: Web3;
  }
}

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  public web3!: Web3;
  public account = signal<string | null>(null);
  public isConnected = signal(false);
  public network = signal<string | null>(null);


  public address$ = new BehaviorSubject<string | null>(null);
  public isConnected$ = new BehaviorSubject<boolean>(false);

  constructor() {
    if (typeof window !== 'undefined') {
      this.initWeb3();
    } else {
      console.warn('Window is not defined. WalletService will not initialize Web3.');
    }
  }

  private initWeb3() {
    if (typeof window !== 'undefined' && window.ethereum) {
      this.web3 = new Web3(window.ethereum);
    } else {
      console.warn('MetaMask not found');
    }
  }

  public connectWallet$(): Observable<string | null> {
    if (!this.web3) return of(null);

    return from((window as any).ethereum.request({ method: 'eth_requestAccounts' }) as Promise<string[]>).pipe(
      map((accounts: string[]) => accounts[0]),
      tap((account: string) => {
        this.address$.next(account);
        this.isConnected$.next(true);
      }),
      catchError(error => {
        console.error('Wallet connection failed:', error);
        return of(null); // emit null on error
      })
    );
  }

  public getChainId$(): Observable<string | null> {
    if (!this.web3) return of(null);

    return from(this.web3.eth.getChainId()).pipe(
      map(chainId => chainId.toString()),
      catchError(error => {
        console.error('Get chain ID failed:', error);
        return of(null);
      })
    );
  }

  public disconnectWallet(): void {
    this.address$.next(null);
    this.isConnected$.next(false);
  }
}