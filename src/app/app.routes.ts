import { Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {LoginComponent} from "./login/login.component";
import {HiComponent} from "./hi/hi.component";
import {RegisterComponent} from "./register/register.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'hi', component: HiComponent },


];
