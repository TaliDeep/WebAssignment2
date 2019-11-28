import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import { environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User = { 
    username: '',
    password: ''
  };


  constructor(private http: HttpClient) { }
  postUser(user:User){
    return this.http.post(environment.apiURL + '/register',user)
  }
  // postUser(username: string, password: string){
  //   const body: User = { username, password};
  //   console.log(body);
  //   this.http.post(environment.apiURL + '/register',body)
  // }
}
