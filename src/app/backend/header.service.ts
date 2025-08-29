import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Header } from '../models/header';

@Injectable({ providedIn: 'root' })
export class HeaderService {
  headerUrl: string =
    'assets/header.json';
  constructor(private http: HttpClient) {}
  getHeader(): Observable<Header> {
    return this.http.get<Header>(this.headerUrl);
  }
}