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

  constructor(private cart: CartService) {}

  ngOnInit() {
    this.cartItems = this.cart.cartList;
  }

  getTotal(): number {
  return this.cartItems.reduce((sum, item) => {
    const numericPrice = Number(item.price.replace(/[₹,\s]/g, ''));
    return sum + numericPrice;
  }, 0);
}



  checkout(): void {
    if (this.cartItems.length === 0) {
      alert('Your cart is already empty!');
      return;
    }

    alert('✅ Checked out successfully!');
    this.cartItems = [];
    this.cart.clearCart(); // Add this method in the CartService
  }
}
