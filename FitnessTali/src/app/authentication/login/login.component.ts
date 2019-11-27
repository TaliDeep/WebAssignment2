import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from "../../authentication.service";
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoginError : boolean = false;
  constructor(public authenticationService: AuthenticationService, private router:Router) { }

  title = 'FitnessTali';
  posts: any;
  onUserLogin(form: NgForm){
    
    //this.authenticationService.addLoginData(form.value.username, form.value.password);


    this.authenticationService.userAuthentication(form.value.username, form.value.password).subscribe((data:any)=>{
      localStorage.setItem('userToken',data.access_token);
      this.router.navigate(['home']);


    },
    (err:HttpErrorResponse)=>{
      this.isLoginError = true;
    });

  }
}

