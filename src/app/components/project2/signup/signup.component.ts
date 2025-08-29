import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SignupLogin } from '../../../models/signup';
import { SignupService } from '../../../backend/signup.service';
import { CommonModule } from '@angular/common';
import { UserdetailsService } from '../../../backend/userdetails.service';

@Component({
  selector: 'app-signup',
  standalone: true, 
    imports: [CommonModule, TranslateModule,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupdata!:SignupLogin;
  SignUp!:FormGroup;
  constructor( private fb: FormBuilder, private signupService:SignupService, private router: Router, private userService: UserdetailsService, private translateService:TranslateService) {translateService.setDefaultLang('en');
  translateService.use('en') }

  
ngOnInit(){
    this.SignUp = this.fb.group({
    username: new FormControl(null,[Validators.required]),
    name: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required]),
    phno: new FormControl(null,[Validators.required]),
    password: new FormControl(null,[Validators.required]),
    confirmpassword: new FormControl(null,[Validators.required])
  })
  this.signupService.getSignupLogin().subscribe((data:SignupLogin) => (this.signupdata = data))
}

toSignup(){
  if(this.SignUp.valid &&  this.SignUp.value.password == this.SignUp.value.confirmpassword){
    this.userService.setLocalStorage(this.SignUp.value.username)
    this.router.navigate(['/purchase'])
    alert('Success! Now you can login and enjoy your shopping..')

  }
  else alert("Enter valid details or password")
}


}