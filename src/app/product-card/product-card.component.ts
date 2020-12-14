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
  @Input('shoppingCart') shoppingCart;
  items:any[] = [];

  constructor(private shoppingCartService : ShoppingCartService) { }

  addToCart(product: Product){
    this.shoppingCartService.addToCart(product);
  }

  removeFromCart(product: Product){
    this.shoppingCartService.removeFromCart(product);
  }

  getQuantity(){
    if(!this.shoppingCart) return 0;
    let item = this.shoppingCart.items[this.product.key];
    return item ? item.quantity : 0;
  }
  
}
