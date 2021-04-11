import { switchMap } from 'rxjs/internal/operators/switchMap';
import { ActivatedRoute } from '@angular/router';
import { Order } from './../../models/order';
import { OrderService } from './../../order.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  //styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {
  orders$;
  id;
  order;

  constructor(private orderService: OrderService, private route: ActivatedRoute) {

    this.orders$ = this.orderService.getOrders().snapshotChanges().pipe(map(o => {
      return o.map(o => {
        const data = o.payload.val();
        data.key = o.key;
        console.log(data);
        return data;
      })
    }));

    //this.id = this.route.snapshot.paramMap.get('id');

    this.id = this.orderService.getOrders().snapshotChanges().forEach(order => {
      //console.log(order[0]);
    })

  }


}