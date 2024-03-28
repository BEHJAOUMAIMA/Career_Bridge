import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {User} from "../../interfaces/user";
import {Role} from "../../interfaces/role";
import {UserRequest} from "../../interfaces/user-request";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'http://127.0.0.1:8080/api/v1/users';
  apiUrlRoles = 'http://127.0.0.1:8080/api/v1/roles';

  constructor(private http: HttpClient) { }

  getRoles(): Observable<Role[]> {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      return throwError('Access token not available');
    }

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + accessToken
    });

    return this.http.get<Role[]>(this.apiUrlRoles, { headers }).pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }
  getUsers(): Observable<User[]> {

    const accessToken = localStorage.getItem('access_token');

    if (accessToken) {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + accessToken
      });

      return this.http.get<User[]>(this.apiUrl, { headers });
    } else {

      throw new Error('Access token not available');
    }
  }

  addUser(userRequest: UserRequest): Observable<User> {
    const accessToken = localStorage.getItem('access_token');

    if (accessToken) {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + accessToken,
        'Content-Type': 'application/json'
      });

      return this.http.post<User>(`${this.apiUrl}/save`, userRequest, { headers })
        .pipe(
          catchError(error => {
            return throwError(error);
          })
        );
    } else {
      throw new Error('Access token not available');
    }
  }
}
