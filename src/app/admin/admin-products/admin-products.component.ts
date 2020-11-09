import { Product } from './../../models/product';
import { ProductService } from './../../product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
//import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  filteredProducts: any[];
  subscription: Subscription;

  constructor(private productService: ProductService) { 
    this.subscription = this.productService.getAll()
      .subscribe(products => {
        this.products = products;
        this.filteredProducts = products
      });
  }

  filter(query: string){
    this.filteredProducts = (query && this.products) ?
      this.products.filter(p => p.title.includes(query)) : 
      this.products;
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}


