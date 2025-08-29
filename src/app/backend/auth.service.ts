import { Injectable, signal } from '@angular/core';

interface User {
  username: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user = signal<User | null>(null);
  user = this._user.asReadonly();

  register(username: string, password: string): boolean {
    // mock register (simply store user)
    this._user.set({ username, password });
    return true;
  }

  login(username: string, password: string): boolean {
    const currentUser = this._user();
    if (currentUser && currentUser.username === username && currentUser.password === password) {
      return true;
    }
    return false;
  }

  logout() {
    this._user.set(null);
  }

  isLoggedIn() {
    return this._user() !== null;
  }
}
