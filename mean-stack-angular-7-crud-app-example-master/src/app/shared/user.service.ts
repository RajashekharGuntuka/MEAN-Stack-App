import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from './user.model';

@Injectable()
export class UserService {
  selectedUser: User = {
    fullName: '',
    email: '',
    password: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  //HttpMethods

  postUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/register',user,this.noAuthHeader);
  }

  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials);
  }

  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + '/userProfile');
  }


  //Helper Methods

  setToken(token: string) {
   
    localStorage.setItem('token', token);

  }

  getToken() {
    return localStorage.getItem('token');
   
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {  
    try{
   // this.deleteToken()
      var token = this.getToken();
    if (token!=null) {
      var userPayload = atob(token.split('.')[1]);
      if(userPayload)
      return JSON.parse(userPayload);
   // this.deleteToken()
    }
    else
      return null;
  }
  catch(err){
    console.log(err);
  }
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else{
      this.deleteToken();
      return false;
  }
}
}
