import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../authentication.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(public authenticationService: AuthenticationService) { }
  onUserSignup(username: string,password: string) {
   
    this.authenticationService.addSignupData(username, password);
    
    // .subscribe(
    //   res => {
    //     console.log(res)
    //     localStorage.setItem('token', res.token)
    //   },
    //   err => console.log(err)
    // )
  }
}
