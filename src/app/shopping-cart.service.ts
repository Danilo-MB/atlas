import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Product } from './models/product';
import 'rxjs/add/operator/take';
import { take } from 'rxjs/operators';
import { ShoppingCart } from './models/shopping-cart';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  items: any[] = [];
  cartId: string;

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  async getCart(): Promise<AngularFireObject<ShoppingCart>>{
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId);
  }

  private async getOrCreateCartId(): Promise<string> {
    this.cartId = localStorage.getItem('cartId');
    if(!this.cartId){
      let cart = await this.create();
      localStorage.setItem('cartId', cart.key);
      this.cartId = cart.key;
      return cart.key;
    }else {
      return this.cartId;
    }    
  }

  async addToCart(product: Product) {
    await this.getOrCreateCartId();
    let item$ = this.db.object('/shopping-carts/' + this.cartId + '/items/' + product.key);
    const item = item$.valueChanges().take(1).subscribe(i => {
      if (i) {
        item$.update({product: product, quantity: i['quantity'] + 1 })
      } else {
        item$.set({product: product, quantity: 1 })
      }
    });
  }

  async removeFromCart(product: Product){
    await this.getOrCreateCartId();
    let item$ = this.db.object('/shopping-carts/' + this.cartId + '/items/' + product.key);
    const item = item$.valueChanges().take(1).subscribe(i => {
      if (i) {
        item$.update({product: product, quantity: i['quantity'] - 1 })
      } else {
        item$.set({product: product, quantity: 1 })
      }
    });
  }
}

