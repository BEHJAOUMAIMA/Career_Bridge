import { Component } from '@angular/core';
import {DashNavbarComponent} from "./dash-navbar/dash-navbar.component";
import {RouterOutlet} from "@angular/router";
import {SideNavComponent} from "./side-nav/side-nav.component";

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    DashNavbarComponent,
    RouterOutlet,
    SideNavComponent
  ],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {

}
