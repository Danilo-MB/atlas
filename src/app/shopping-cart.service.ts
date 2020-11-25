import { AngularFireDatabase, AngularFireDatabaseModule, snapshotChanges } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Product } from './models/product';
import 'rxjs/add/operator/take';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create(){
    return this.db.list('/shopping-cart').push({
      dateCreated: new Date().getTime()
    });
  }

  private getCart(cartId: string){
    this.db.object('/shopping-carts/' + cartId);
  }

  private async getOrCreateCartId(){
    let cartId = localStorage.getItem('cartId');
    if(!cartId){
      let result = await this.create();
      localStorage.setItem('cartId', result.key);
      return result.key;
    }
      return cartId;
  }

  async addToCart(product: Product){
    let cartId = await this.getOrCreateCartId();
    let item$ = this.db.object('/shopping-carts/' + cartId + '/items/' + product.$key);
    item$.snapshotChanges().take(1)
    .subscribe((item:any) => {
      if(item$) item$.update({product, quantity: (item.quantity || 0) + 1});
      else item$.set({product: product, quantity: 1});
    });
  }
}
