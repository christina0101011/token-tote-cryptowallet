import { NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { NFTS_OVERVIEW } from '../../../core/constants/nfts-overview';

@Component({
  selector: 'app-nfts-overview',
  imports: [ MatChipsModule, NgComponentOutlet ],
  templateUrl: './nfts-overview.component.html',
  styleUrl: './nfts-overview.component.scss'
})

export class NftsOverviewComponent {
  public nftsOverview = NFTS_OVERVIEW;
  public selectedComponent = this.nftsOverview[0].component;
}
