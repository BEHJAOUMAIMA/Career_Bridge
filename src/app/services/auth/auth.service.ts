import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationRequest} from "../../interfaces/authenticate-request";
import {catchError, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://127.0.0.1:8080/api/v1/auth';
  constructor(private http: HttpClient) { }
  login(authRequest: AuthenticationRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/authenticate`, authRequest).pipe(
      map(response => {
        localStorage.setItem('access_token', response.access_token);
        return response;
      }),
      catchError(error => {
        throw error;
      })
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('access_token');
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }
  setToken(access_token: string): void {
    localStorage.setItem('access_token', access_token);
  }
  getToken(): string | null {
    return localStorage.getItem('access_token');
  }
}
