import { ShoppingCartService } from './../shopping-cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input('product') product: Product;
  @Input('showActions') showActions = true;

  constructor(private shoppingCartService : ShoppingCartService) { }

  addToCart(product: Product){
    this.shoppingCartService.addToCart(product);
  }
  
}
