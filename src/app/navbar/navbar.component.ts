import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) {}

  isDashboardPage(): boolean {
    return this.router.url.startsWith('/dashboard');
  }
}
