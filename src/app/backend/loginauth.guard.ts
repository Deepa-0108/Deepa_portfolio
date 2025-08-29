import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { LoginauthService } from './loginauth.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginauthGuard {
  constructor(private loginAuth: LoginauthService, private router: Router) {}

  canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean {
  let loginauth: boolean = this.loginAuth.isAuthenticate();
  if (loginauth) {
    return true;
  } else {
    this.router.navigate(['/login']);
    return false;
  }
}
}
