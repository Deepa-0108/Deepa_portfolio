import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { User } from '../models/userdetails';



@Injectable({providedIn: 'root'})
export class UserdetailsService {
  value:string | undefined
  userdetailsUrl:string = 'assets/userdetail.json'
  constructor(private http: HttpClient) { }

  
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.userdetailsUrl)
  }

  validateUser(username: string, password: string): Observable<User | null> {
    return this.getUsers().pipe(
      map(users =>
        users.find(user => user.username === username && user.password === password) || null
      )
    );
  }

  setLocalStorage(value:string){
    localStorage.setItem('name', value)
  }

  getLocalStorage(key:string){
     localStorage.getItem(key)
  }

  removeLocal(){
    return localStorage.removeItem('name')
  }
}