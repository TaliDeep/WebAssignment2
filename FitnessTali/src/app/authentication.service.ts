import { Injectable } from '@angular/core';
import { Authentication } from './authentication/authentication.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) { }
  private apiBaseUrl = 'http://localhost:3000/api/';

  private authentications: Authentication[] = [];

  addLoginData(username: string, password: string) {
    const loginData: Authentication = { username: username, password: password };
    this.authentications.push(loginData);
  }

  private saveToken(token: string) {
    window.localStorage['loc8r-token'] = token;
  }
  private getToken(token: string) {
    if (window.localStorage['loc8r-token']) {
      return window.localStorage['loc8r-token'];
    }
    else {
      return '';
    }
  }

  // public register(authentications: authentication) {
  //   const url = `${this.apiBaseUrl}/login`;
  //   this.http.post<AuthResponse>(url, authentications).subscribe(data => {
  //     this.saveToken(data.token);
  //     return true;
  //   });
  // }

}
