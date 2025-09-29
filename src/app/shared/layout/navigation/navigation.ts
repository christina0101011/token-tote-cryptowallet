import { Component } from '@angular/core';
import { MENU } from '@constants/navigation-items';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss'
})
export class NavigationComponent {
  public menu = MENU;
}
