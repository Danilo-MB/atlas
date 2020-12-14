import { ShoppingCartItem } from './../models/shopping-cart-item';
import { ShoppingCartService } from './../shopping-cart.service';
import { AuthService } from './../auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppUser } from '../models/app-user';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  appUser: AppUser;
  shoppingCartItemCount: number;

  constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) {
    
   }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    let cart$ = await this.shoppingCartService.getCart();
    cart$.valueChanges().subscribe(cart => {
      this.shoppingCartItemCount = 0;
      for (let productId in cart.items){
        this.shoppingCartItemCount += cart.items[productId].quantity;
      }
    });
  }

  ngOnDestroy(){
  }


  logout(){
    this.auth.logout();
    this.appUser = null;
  }

}
