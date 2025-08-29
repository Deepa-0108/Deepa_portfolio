import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../backend/product.service';
import { CartService } from '../../../backend/cart.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from "../spinner/spinner.component";

@Component({
  selector: 'app-purchase', 
   standalone: true, 
imports: [CommonModule, TranslateModule, RouterModule, SpinnerComponent],
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  product!:Product[]
  products:any;
  name!:string;
  price!:number;
  add:boolean = true;
  isLoading:boolean = true;
  constructor(private productService:ProductService,private cart:CartService) { }
  LoginName = localStorage.getItem('name')
  ngOnInit() {
    this.productService.getProduct().subscribe((data:Product[]) => (this.product = data, this.isLoading=false));
  }

  addItem(products:any){
    this.add = !this.add
   this.cart.cartList.push(products);
   alert('Item Successfully added to the cart...')
  }
}