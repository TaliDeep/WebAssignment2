import { Injectable } from '@angular/core';
import { Authentication } from './authentication/authentication.model';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  private baseUrl = 'http://localhost:3000/';

  //private authentications: Authentication[] = [];

  addLoginData(username: string, password: string) {
    const loginData: Authentication = { username: username, password: password };
    // this.authentications.push(loginData);

    // this.http
    //   .post<{ message: string, exerciseId: string }>('http://localhost:3000/api', loginData)
    //   .subscribe(responseData => {
    //     console.log(loginData);
    //     this.authentications.push(loginData);
    //     this.router.navigate(['/']);
    //   });

  }


  addSignupData(username: string, password: string) {
    let userUrl = this.baseUrl + '/api/signup';
    const body: Authentication = { username, password};
    this.http.post<Authentication>(userUrl,body).toPromise().then((data:any)=> {
      console.log("data");
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
