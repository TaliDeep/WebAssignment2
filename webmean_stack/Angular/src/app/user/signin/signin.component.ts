import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../shared/user.service'
import {Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private userService: UserService, private router : Router) { }

  model ={
    username :'',
    password: ''
  };
  serverError: string;
  ngOnInit() {
    if(this.userService.isLoggedIn()){
      this.router.navigateByUrl('/userprofile');
    }
  }

  onSigninUser(form:NgForm){

    this.userService.login(form.value).subscribe(
      res=>{
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/userprofile');
      },
      err=> {
        this.serverError = err.error.message;
      }
    );
  }

  goToSignup(){
    this.router.navigate(['/signup']);

  }

}
