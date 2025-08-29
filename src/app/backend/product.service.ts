import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  productUrl:string='assets/product.json'
  constructor(private http: HttpClient) { }

  getProduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl)
  }

}