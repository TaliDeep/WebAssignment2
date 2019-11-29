import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router} from "@angular/router";
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userDetails;
  userData;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

    this.userService.getUserProfile().subscribe(
      res=>{
        this.userDetails = res['user'];
      },
      err=>{}
    );

    this.userService.getUserExercise().subscribe(
      res=>{
        this.userData = res['exercise'];
      },
      err=>{}
    );

  }

  displayedColumns: string[] = ['exercise', 'description', 'repetitions', 'sets'];

  onPostExercise(form : NgForm) {

    this.userService.postExercise(form.value).subscribe();
    this.resetForm(form);
    this.refresh();

  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
  resetForm(form: NgForm) {
    this.userService.selectedExercise = {
      exercise: '',
      workoutID: '',
      description: '',
      sets: '',
      repetitions: ''
    };
    form.resetForm();
  }
  refresh(): void {
    window.location.reload();
}
}
