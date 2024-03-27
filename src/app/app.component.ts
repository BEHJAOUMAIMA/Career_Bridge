import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {FooterComponent} from "./footer/footer.component";
import { Tooltip, initTWE } from 'tw-elements';

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, NavbarComponent, HomePageComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Career_Bridge';
  ngOnInit() {
    initTWE({ Tooltip });
  }
}
