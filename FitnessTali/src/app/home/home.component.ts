import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userClaims : any;
  constructor(public authenticationService: AuthenticationService, private router:Router) { }

  ngOnInit() {
    this.authenticationService.getUserClaims().subscribe((data:any)=>{
      this.userClaims = data;
    });
  }

}
