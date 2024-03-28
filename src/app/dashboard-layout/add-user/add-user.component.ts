import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../../services/user/user.service";
import {NgForOf, NgIf} from "@angular/common";
import {Role} from "../../interfaces/role";
import {UserRequest} from "../../interfaces/user-request";
import {User} from "../../interfaces/user";
import {MatFormField} from "@angular/material/form-field";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect, MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    NgForOf,
    NgIf,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit {
  successMessage: string = '';
  errorMessage: string = '';
  roles: Role[] = [];
  selectedRole: string = '';
  userRequest: UserRequest = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: undefined
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles(): void {
    this.userService.getRoles().subscribe(
      roles => {
        this.roles = roles;
      },
      error => {
        console.error('Error loading roles:', error);
        this.errorMessage = 'An error occurred while loading roles';
      }
    );
  }

  onSubmit(): void {
    console.log('Selected role:', this.selectedRole);
    console.log('Roles:', this.roles);
    console.log('Selected role:', this.selectedRole?.toString());

    if (!this.selectedRole) {
      this.errorMessage = 'Veuillez sélectionner un rôle.';
      return;
    }
    const selectedRoleObject = this.getRoleByRoleType(this.selectedRole);
    if (!selectedRoleObject) {
      this.errorMessage = 'Rôle sélectionné invalide.';
      return;
    }

    this.userRequest.role = selectedRoleObject;

    this.userService.addUser(this.userRequest).subscribe(
      response => {
        console.log('User added successfully:', response);
        this.successMessage = 'User added successfully';
      },
      error => {
        console.error('Error adding user:', error);
        this.errorMessage = 'An error occurred while adding user';
      }
    );
  }

  getRoleByRoleType(roleType: string): Role | undefined {
    if (typeof roleType === 'string') {
      return this.roles.find(role => role.roleType === roleType);
    } else {
      console.error('Invalid role type:', roleType);
      return undefined;
    }
  }

}
