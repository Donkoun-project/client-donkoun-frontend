import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.baseUrl;

  constructor(private _http: HttpClient) {}

  // Method to register a new user
  register(user: User): Observable<any> {
    return this._http.post(this.apiUrl+"/users", user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Method to login a user
  login(user: User): Observable<any> {
    return this._http.post(this.apiUrl+"/login", user, {
    //  return this._http.post(`${this.apiUrl}/login`, user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      tap((response: any) => {
        // Handle the response here if needed
        // For example, save the token to localStorage
        if (response && response?.token) {
          localStorage.setItem('token', response?.data?.token);
        }
      })
    );
  }

  // Method to logout a user
  logout(): void {
    // Remove token from localStorage
    localStorage.removeItem('token');
  }

  // Optionally, a method to check if the user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

}
