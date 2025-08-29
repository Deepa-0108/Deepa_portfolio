import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignupLogin } from '../models/signup';

@Injectable({providedIn:'root'})
export class SignupService {
  signuploginUrl:string='assets/signup.json'
  constructor(private http:HttpClient) { }

  getSignupLogin():Observable<SignupLogin>{
 return this.http.get<SignupLogin>(this.signuploginUrl)
  }
}