import { Injectable } from '@angular/core';
import { Authentication } from './authentication/authentication.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) { }

  private authentications: Authentication[] = [];

  addLoginData(username: string, password: string) {
    const loginData: Authentication = { username: username, password: password };
    this.authentications.push(loginData);

    this.http
    .post<{ message: string, exerciseId: string }>('http://localhost:3000/', loginData)
    .subscribe(responseData => {
      console.log(loginData);
      this.authentications.push(loginData);
      this.router.navigate(['/']);
    });

  }

  addSignupData(usernameSignup: string, passwordSignup: string) {
    const signupData: Authentication = { username: usernameSignup, password: passwordSignup };
    this.authentications.push(signupData);

    this.http
    .post<{ message: string, exerciseId: string }>('http://localhost:3000/Signup', signupData)
    .subscribe(responseData => {
      console.log(signupData);
      this.authentications.push(signupData);
      this.router.navigate(['/']);
    });

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
}
