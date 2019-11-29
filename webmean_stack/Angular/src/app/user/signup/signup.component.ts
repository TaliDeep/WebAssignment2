import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { User } from '../../shared/user.model';
import { NgForm } from '@angular/forms';
import {Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  showSuccessMessages: boolean;
  serverError: string;

  constructor(private userService: UserService, private router : Router) { }
  ngOnInit(){
  }

  onUser(form : NgForm) {

    this.userService.postUser(form.value).subscribe(
      
      res => {
        this.showSuccessMessages = true;
        setTimeout(() => this.showSuccessMessages = false, 4000);
        this.resetForm(form);
        this.router.navigateByUrl('/userprofile');

      },
      err => {
        if (err.status === 422) {
          this.serverError = err.error.join('<br/>');
        }
        else
          this.serverError = 'Error, contact admin.';
      }
    );

  }
  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      username: '',
      password: ''
    };
    form.resetForm();
    this.serverError = '';
  }
  backToLogin(){
    this.router.navigate(['/login']);

  }


}

