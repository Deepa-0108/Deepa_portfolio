import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({ providedIn: 'root' })
export class CartService {
  cartList:Product[]= []
  constructor() { }

  getItem():Observable<Product[]>{
    return of(this.cartList)
  }

  clearCart(): void {
  this.cartList = [];
}


}
