import { ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { OrderService } from './../../order.service';
import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCart } from '../../models/shopping-cart';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.scss']
})
export class AdminOrderComponent implements OnInit {
  order$;
  order;
  orderId;
  @Input('cart') cart: ShoppingCart;

  constructor(private orderService: OrderService, private route: ActivatedRoute) {

    //this.orderId = this.route.snapshot.paramMap.get('key');

    this.route.paramMap.subscribe(param => {
      this.orderId = param.get('id');
    })

    this.order$ = this.orderService.get(this.orderId).subscribe(o => this.order = o);

  }


  ngOnInit() {

  }

}
