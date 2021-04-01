import { ShoppingCartItem } from './../models/shopping-cart-item';
import { ShoppingCartService } from './../shopping-cart.service';
import { AuthService } from './../auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppUser } from '../models/app-user';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) {
    
   }

   async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.cart$ = (await this.shoppingCartService.getCart());
  }

  ngOnDestroy(){
  }


  logout(){
    this.auth.logout();
    this.appUser = null;
  }

}
