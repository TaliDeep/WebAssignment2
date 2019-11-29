import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import { Exercise } from './exercise.model';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User = {
    username: '',
    password: ''
  };

  selectedExercise: Exercise = {
    exercise: '',
    description: '',
    workoutID: '',
    sets: '',
    repetitions: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(private http: HttpClient) { }
  postUser(user: User) {
    return this.http.post(environment.apiURL + '/register', user, this.noAuthHeader);
  }
  postExercise(exercise: Exercise) {
    return this.http.post(environment.apiURL + '/exercise', exercise, this.noAuthHeader);
  }
  login(authCredentials) {
    return this.http.post(environment.apiURL + '/authenticate', authCredentials);
  }
  getUserProfile() {
    return this.http.get(environment.apiURL + '/userProfile');
  }
  getUserExercise() {
    return this.http.get(environment.apiURL + '/exercise');
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }
  getUserpayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }
  isLoggedIn() {
    var userPayload = this.getUserpayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
  }
}
