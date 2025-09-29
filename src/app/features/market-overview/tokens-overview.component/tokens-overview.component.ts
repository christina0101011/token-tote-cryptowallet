import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { TOKENS_OVERVIEW } from '../../../core/constants/tokens-overview';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-tokens-overview',
  imports: [ MatChipsModule, NgComponentOutlet ],
  templateUrl: './tokens-overview.component.html',
  styleUrl: './tokens-overview.component.scss'
})

export class TokensOverviewComponent {

  public tokensOverview = TOKENS_OVERVIEW;
  public selectedComponent = this.tokensOverview[0].component;
}
