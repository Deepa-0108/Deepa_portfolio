import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginauthService {
  loginauth:boolean = false

  loggedIn(){
    this.loginauth = true;
  }

  loginFail(){
    this.loginauth = false;
  }

  isAuthenticate():boolean{
    return this.loginauth;
  }
  constructor() { }

}