import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../models/userdetails';
import { SignupLogin } from '../../../models/signup';
import { UserdetailsService } from '../../../backend/userdetails.service';
import { SignupService } from '../../../backend/signup.service';
import { LoginauthService } from '../../../backend/loginauth.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [CommonModule, TranslateModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData!: User[];
  login: boolean = false;
  signupdata!:SignupLogin;
  Login!:FormGroup
  constructor(
    private userdetailsService: UserdetailsService,
    private signup:SignupService,
    private router: Router,
    private fb: FormBuilder,
    private loginAuth: LoginauthService
  ) {}
  

  ngOnInit() {
   this.Login = this.fb.group({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });
    this.userdetailsService
      .getUsers()
      .subscribe((data: User[]) => (this.loginData = data));

      this.signup.getSignupLogin().subscribe((data:SignupLogin) => (this.signupdata = data))
  }

  onSubmit() {
    if (this.loginData.length > 0) {
      for (let details of this.loginData) {
        if (
          this.Login.value.username == details.username &&
          this.Login.value.password == details.password &&
          this.Login.valid
        ) {
          this.loginAuth.loggedIn();
          this.router.navigate(['/purchase']);
          alert('Login Success :)');
          this.userdetailsService.setLocalStorage(this.Login.value.username);
        } else {
          this.login = !this.login;
        }
      }
    }
  }
}
