import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { OrderService } from './../order.service';
import { ShoppingCart } from './shopping-cart';

export class Order {
  datePlaced: number;
  items: any[] = [];
  id: string;
  orders$;

  constructor(public userId: string, public shipping: any, shoppingCart: ShoppingCart, public orderService: OrderService) {

    this.datePlaced = new Date().getTime();

    this.items = shoppingCart.items.map(i => {
      return {
        product: {
          title: i.product.title,
          imageUrl: i.product.imageUrl,
          price: i.product.price,
          id: i.product.key
        },
        quantity: i.quantity,
        totalPrice: i.totalPrice,
      }
    })
  }
}