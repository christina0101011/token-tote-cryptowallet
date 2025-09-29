import { Component } from '@angular/core';
import { NavigationComponent } from "./navigation/navigation";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [
    RouterOutlet, 
    NavigationComponent
  ]
})
export class LayoutComponent { }