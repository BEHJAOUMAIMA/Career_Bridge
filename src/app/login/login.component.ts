import { Component } from '@angular/core';
import {AuthenticationRequest} from "../interfaces/authenticate-request";
import {AuthService} from "../services/auth/auth.service";
import {Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authenticationRequest: AuthenticationRequest = {
    email: '',
    password: ''
  };
  errorMessage: string | undefined;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.authenticationRequest)
      .subscribe(
        () => this.router.navigate(['/hi']),
        error => {
          console.error('Erreur de connexion :', error);
          this.errorMessage = 'Email ou mot de passe sont ivalides !';
        }
      );
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
