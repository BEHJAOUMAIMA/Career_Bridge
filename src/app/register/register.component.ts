import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {RegisterRequest} from "../interfaces/register-request";
import {AuthService} from "../services/auth/auth.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerRequest: RegisterRequest = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmedPassword: '',
  };

  submitted: boolean = false;
  errorMessage: string | undefined;
  successMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.submitted = true;

    if (!this.isFormValid()) {
      return;
    }

    this.authService.register(this.registerRequest).subscribe(
      response => {
        console.log('Inscription réussie :', response);
        this.successMessage = 'Inscription réussie. Veuillez vous connecter.';
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Erreur lors de l\'inscription :', error);
        this.errorMessage = 'Une erreur est survenue lors de l\'inscription.';
      }
    );
  }

  private isFormValid(): boolean {
    return !!(
      this.registerRequest.firstName &&
      this.registerRequest.lastName &&
      this.registerRequest.email &&
      this.registerRequest.password &&
      this.registerRequest.confirmedPassword &&
      this.registerRequest.password === this.registerRequest.confirmedPassword
    );
  }

  protected readonly onsubmit = onsubmit;
}
