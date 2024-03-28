import { Component } from '@angular/core';
import {User} from "../../interfaces/user";
import {UserService} from "../../services/user/user.service";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-users-dash',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './users-dash.component.html',
  styleUrl: './users-dash.component.css'
})
export class UsersDashComponent {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(
        (users) => {
          this.users = users;
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de la récupération des utilisateurs : ', error);
        }
      );
  }
}
