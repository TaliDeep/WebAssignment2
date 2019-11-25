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
  onUserSignup(form: NgForm) {
   
    this.authenticationService.addSignupData("hey", "hey");

  }
}
