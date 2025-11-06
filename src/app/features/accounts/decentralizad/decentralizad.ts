import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { AccountsService } from '@services/accounts.service';

@Component({
  selector: 'app-decentralizad',
  imports: [],
  templateUrl: './decentralizad.html',
  styleUrl: './decentralizad.scss'
})
export class DecentralizadComponent {
  readonly addressDecentralized = '0xCb613F356C60E66405a0A9f51838415A21AAba32';
  constructor(public accountsService: AccountsService) {}

  ngOnInit() {
    this.accountsService.getBalance(this.addressDecentralized);
  }
}
