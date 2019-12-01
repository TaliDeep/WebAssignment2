import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userDetails;
  userData;
  userWorkout;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => { }
    );
    this.userService.getUserExercise().subscribe(
      res => {
        this.userData = res['exercise'];
      },
      err => { }
    );
    this.userService.getUserWorkout().subscribe(
      res => {
        this.userWorkout = res['workout'];
        
      },
      err => { }
    );
  }

  displayedColumns: string[] = ['exercise', 'description', 'repetitions', 'sets'];
  onPickWorkout(){
    window.location.reload();

  }
 

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }


  goToAddExercise() {
    this.router.navigate(['/addexercise']);

  }
  goToAddWorkout() {
    this.router.navigate(['/addworkout']);

  }
}
