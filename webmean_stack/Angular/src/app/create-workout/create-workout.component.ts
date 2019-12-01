import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.css']
})
export class CreateWorkoutComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }


  onPostWorkout(form: NgForm) {

    this.userService.postWorkout(form.value).subscribe();
    this.router.navigate(['/userprofile']);
  }
  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

  refresh(): void {
    window.location.reload();
  }
  goToHome() {
    this.router.navigate(['/userprofile']);

  }
}






















