import { ActivatedRoute } from '@angular/router';
import { OrderService } from './../../order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.scss']
})
export class AdminOrderComponent implements OnInit {
  order;

  constructor(private orderService: OrderService, private route: ActivatedRoute) {
    let id = this.route.snapshot.paramMap.get('uid');
    console.log(id); // llega null

    if(id){
      this.orderService.get(id).take(1).subscribe(o => this.order = o);
      //console.log(this.order + "order")
    }

   }
  

  ngOnInit() {

  }

}
