import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {HeaderComponent} from "../header/header.component";
import {MainComponent} from "../main/main.component";
import {BannerComponent} from "../banner/banner.component";
import {FooterComponent} from "../footer/footer.component";
import {FomationComponent} from "../fomation/fomation.component";
import {GetReadyComponent} from "../get-ready/get-ready.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NavbarComponent,
    HeaderComponent,
    MainComponent,
    BannerComponent,
    FooterComponent,
    FomationComponent,
    GetReadyComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
