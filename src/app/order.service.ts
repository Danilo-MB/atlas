import { switchMap } from 'rxjs/internal/operators/switchMap';
import { map } from 'rxjs/operators';
import { ShoppingCartService } from './shopping-cart.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Order } from './models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFireDatabase, private shoppingCartService: ShoppingCartService) { }

  getOrders() {
    return this.db.list('/orders');
  }

  getOrderByUser() {

  }

  get(orderId: string) {
    return this.db.object('/orders/' + orderId).valueChanges();
  }

  async placeOrder(order: Order) {
    let result = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }


}
