import { ShoppingCartService } from './shopping-cart.service';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFireDatabase, private shoppingCartService: ShoppingCartService) { }

  getOrders(){
    return this.db.list('/orders');
  }

  getOrderByUser(){
    
  }

  async placeOrder(order){
    let result = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }


}
