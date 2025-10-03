import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../backend/auth.service';
import { CommonModule } from '@angular/common';
import { UserdetailsService } from '../../../backend/userdetails.service';
import { LoginauthService } from '../../../backend/loginauth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  template: `
    <div class="login-container">
      <h2>Login</h2>
      <form [formGroup]="form" (ngSubmit)="onLogin()">
        <input formControlName="username" type="text" placeholder="Username" />
        <input formControlName="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <div *ngIf="loginError" class="error">{{ loginError }}</div>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: Arial, sans-serif;
      background-color: #f0f2f5;
    }

    .login-container {
      background: white;
      padding: 2rem 3rem;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      width: 320px;
    }

    h2 {
      margin-bottom: 1rem;
      font-weight: bold;
      text-align: center;
      color: #333;
    }

    input[type="text"], input[type="password"] {
      width: 100%;
      padding: 0.6rem;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
      font-size: 1rem;
      transition: border-color 0.3s ease;
    }

    input[type="text"]:focus, input[type="password"]:focus {
      border-color: #007bff;
      outline: none;
    }

    button {
      width: 100%;
      padding: 0.7rem;
      background-color: #007bff;
      border: none;
      border-radius: 4px;
      color: white;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #0056b3;
    }

    .error {
      color: red;
      margin-top: 1rem;
      text-align: center;
    }
  `]
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loginError = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userdetailsService: UserdetailsService,
    private loginAuthService: LoginauthService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  onLogin() {
    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;
console.log("us", username, password);

    this.userdetailsService.validateUser(username, password).subscribe(user => {
      if (user) {
        this.loginError = '';
        console.log(user,"userr");
        
        this.loginAuthService.loggedIn();
        this.userdetailsService.setLocalStorage(user.name);

        this.router.navigate(['/project3/notes']);
      } else {
        this.loginError = 'Invalid username or password';
        this.loginAuthService.loginFail();
      }
    });
  }
}
