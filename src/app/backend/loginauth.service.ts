import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginauthService {
  loginauth: boolean;

  constructor() {
    this.loginauth = localStorage.getItem('auth') === 'true';
  }

  loggedIn() {
    this.loginauth = true;
    localStorage.setItem('auth', 'true');
  }

  loginFail() {
    this.loginauth = false;
    localStorage.removeItem('auth');   
  }

  isAuthenticate(): boolean {
    return this.loginauth || localStorage.getItem('auth') === 'true';
  }
}
