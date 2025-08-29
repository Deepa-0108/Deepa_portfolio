import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../backend/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  template: `
    <h2>Register</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <input formControlName="username" placeholder="Username" />
      <input type="password" formControlName="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  `
})
export class RegisterComponent {
    form!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}
 ngOnInit() {
    this.form = this.fb.group({
    username: [''],
    password: [''],
  });
 }
  onSubmit() {
    const { username, password } = this.form.value;
    if (this.auth.register(username!, password!)) {
      alert('Registered successfully! Please login.');
      this.router.navigate(['/project3/login']);
    }
  }
}
