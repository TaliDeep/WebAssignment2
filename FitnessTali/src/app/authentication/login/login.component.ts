import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from "../../authentication.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public authenticationService: AuthenticationService) { }

  title = 'FitnessTali';

  onUserLogin(form: NgForm){
    
    this.authenticationService.addLoginData(form.value.username, form.value.password);
    
  }
}
