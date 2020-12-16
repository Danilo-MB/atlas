import { Component, Input } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.scss']
})
export class ProductQuantityComponent {
  @Input('product') product: Product;
  //@Input('showActions') showActions = true; no necesaria
  @Input('shoppingCart') shoppingCart;
  items:any[] = [];

  constructor(private shoppingCartService : ShoppingCartService) { }

  addToCart(product: Product){
    this.shoppingCartService.addToCart(product);
  }

  removeFromCart(product: Product){
    this.shoppingCartService.removeFromCart(product);
  }


}
