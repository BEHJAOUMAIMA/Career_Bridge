import { Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {LoginComponent} from "./login/login.component";
import {HiComponent} from "./hi/hi.component";
import {RegisterComponent} from "./register/register.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {JobOffersComponent} from "./job-offers/job-offers.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {ApplyToJobComponent} from "./apply-to-job/apply-to-job.component";
import {CompaniesComponent} from "./companies/companies.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'job-offers', component:JobOffersComponent },
  { path: 'contact-us', component:ContactUsComponent },
  { path: 'apply-to-jpb', component:ApplyToJobComponent },
  { path: 'companies', component:CompaniesComponent },
  { path: 'hi', component: HiComponent },


];
