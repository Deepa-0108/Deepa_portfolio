import { Routes } from '@angular/router';
import { Project2Component } from './project2.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { HomeComponent } from './home/home.component';
import { LoginauthGuard } from '../../backend/loginauth.guard';

export const project2Routes: Routes = [
  {
    path: '',
    component: Project2Component,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent },
      {
        path: 'purchase',
        canActivate: [LoginauthGuard],
        component: PurchaseComponent,
      },
      { path: 'cart', component: CartComponent },
    ]
  }
];
