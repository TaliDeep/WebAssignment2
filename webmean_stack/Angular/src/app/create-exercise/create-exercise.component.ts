import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.css']
})
export class CreateExerciseComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  userWorkout;
  ngOnInit() {
    this.userService.getUserWorkout().subscribe(
      res => {
        this.userWorkout = res['workout'];
      },
      err => { }
    );
  }
  onPostExercise(form: NgForm) {

    this.userService.postExercise(form.value).subscribe();
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












