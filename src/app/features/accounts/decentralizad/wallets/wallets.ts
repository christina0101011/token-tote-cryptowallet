import { Component, OnInit } from '@angular/core';
import { WalletService } from '@services/wallet.service';

@Component({
  selector: 'app-wallets',
  imports: [],
  templateUrl: './wallets.html',
  styleUrl: './wallets.scss'
})
export class WalletsComponent implements OnInit {
  constructor(private walletService: WalletService) {}
  ngOnInit(): void {
    this.connectWallet()
  }

  connectWallet() {
    this.walletService.connectWallet$().subscribe(account => {
      if (account) {
        console.log('Connected account:', account);
      } else {
        console.error('Failed to connect wallet');
      }
    });
  }
}
