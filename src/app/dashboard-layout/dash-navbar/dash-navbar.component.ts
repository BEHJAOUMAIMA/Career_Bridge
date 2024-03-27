import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-dash-navbar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './dash-navbar.component.html',
  styleUrl: './dash-navbar.component.css'
})
export class DashNavbarComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function() {
      const userMenuButton = document.getElementById('user-menu-button');
      const userMenu = document.querySelector('.absolute[aria-labelledby="user-menu-button"]');

      if (userMenuButton && userMenu) {
        userMenuButton.addEventListener('click', function() {
          const expanded = userMenuButton.getAttribute('aria-expanded') === 'true' || false;
          userMenuButton.setAttribute('aria-expanded', String(!expanded));
          userMenu.classList.toggle('hidden');
        });

        const userMenuItems = userMenu.querySelectorAll('[role="menuitem"]');
        userMenuItems.forEach(item => {
          item.addEventListener('click', function() {
            userMenuButton.setAttribute('aria-expanded', 'false');
            userMenu.classList.add('hidden');
          });
        });
      } else {
        console.error("Impossible de trouver l'élément userMenuButton ou userMenu.");
      }
    });


  }

}
