import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { User } from '../../shared/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {
  showSuccessMessages: boolean;
  serverError: string;

  constructor(private userService: UserService) { }
  ngOnInit(){
  }

  onUser(username: string, password: string, form : NgForm) {

    this.userService.postUser(form.value).subscribe(
      
      res => {
        this.showSuccessMessages = true;
        setTimeout(() => this.showSuccessMessages = false, 4000);
        this.resetForm(form)
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

}

