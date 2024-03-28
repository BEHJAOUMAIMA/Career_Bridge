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
import {NotFoundComponent} from "./not-found/not-found.component";
import {NotAuthorizedComponent} from "./not-authorized/not-authorized.component";
import {ForbiddenComponent} from "./forbidden/forbidden.component";
import {TrainingComponent} from "./training/training.component";
import {DashboardLayoutComponent} from "./dashboard-layout/dashboard-layout.component";
import {DashPrincipalComponent} from "./dashboard-layout/dash-principal/dash-principal.component";
import {UsersDashComponent} from "./dashboard-layout/users-dash/users-dash.component";
import {AddUserComponent} from "./dashboard-layout/add-user/add-user.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'job-offers', component:JobOffersComponent },
  { path: 'contact-us', component:ContactUsComponent },
  { path: 'apply-to-job', component:ApplyToJobComponent },
  { path: 'companies', component:CompaniesComponent },
  { path: 'not-found', component:NotFoundComponent },
  { path: 'not-authorized', component:NotAuthorizedComponent },
  { path: 'forbidden', component:ForbiddenComponent },
  { path: 'training', component:TrainingComponent },
  { path: 'hi', component: HiComponent },

  { path: 'dashboard',
    component: DashboardLayoutComponent,
    children : [
      { path: '', redirectTo: '/dashboard/welcome', pathMatch: 'full' },
      {path:'welcome', component:DashPrincipalComponent},
      {path:'users', component:UsersDashComponent},
      {path:'add-user', component:AddUserComponent}
    ]
  },

];
