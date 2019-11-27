import { Injectable } from '@angular/core';
import { Authentication } from './authentication/authentication.model';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getLocaleTimeFormat } from '@angular/common';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private headers = new Headers({'Content-type': 'application/json'});

  constructor(private http: HttpClient, private router: Router) { }
  private baseUrl = 'http://localhost:3000/api';

  private authentications: Authentication[] = [];

  addLoginData(username: string, password: string) {
    const loginData: Authentication = { username: username, password: password };
    this.authentications.push(loginData);

  }

  registerUser(username: string, password: string){
    const body: Authentication = { username, password};
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.baseUrl + '/signup',body,{headers : reqHeader});
  }

  addSignupData(username: string, password: string) {
    let userUrl = this.baseUrl + '/signup';
    const body: Authentication = { username, password};
    this.http.post<Authentication>(userUrl,body).toPromise().then((data:any)=> {
      console.log("data");
    });
  }


  userAuthentication(userName, password){
    var data = "username"+userName+"&password"+password+"&grant_type=password";
    var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-urlencoded'});
    return this.http.post(this.baseUrl+'/token',data,{headers: reqHeader});
  }

  getUserClaims(){
    return this.http.get(this.baseUrl+'GetUserClaims');
  }


  private saveToken(token: string) {
    window.localStorage['loc8r-token'] = token;
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
