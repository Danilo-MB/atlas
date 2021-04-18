import { NavbarComponent } from './../navbar/navbar.component';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { fade } from '../animations/animations';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  animations: [
    fade
  ]
})
export class ShoppingCartComponent implements OnInit {
  cart$;
  cart;

  constructor(private shoppingCartService: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = (await this.shoppingCartService.getCart());
  }

  clearCart() {
    this.shoppingCartService.clearCart();
  }

}
