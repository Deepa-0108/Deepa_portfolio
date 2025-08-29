import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../backend/cart.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true, 
    imports: [CommonModule, TranslateModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  constructor(private cart:CartService) { }

  ngOnInit() {
    this.cartItems=this.cart.cartList;
  }


}