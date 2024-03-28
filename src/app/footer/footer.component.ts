import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router: Router) {}

  isDashboardPage(): boolean {
    return this.router.url.startsWith('/dashboard');
  }
}
