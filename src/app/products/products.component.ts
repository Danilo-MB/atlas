import { ShoppingCartService } from './../shopping-cart.service';
import { Product } from './../models/product';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../category.service';
import { ProductService } from './../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Observable<Product[]>;
  filteredProducts: Observable<Product[]>;
  category: string;
  cart: any;
  subscription: Subscription;
  cartId: string;
  

  constructor(productService: ProductService, route: ActivatedRoute, private shoppingCartService: ShoppingCartService) {
    //productService.getAll().subscribe(products => this.products = products);
    this.products = productService.getAll();
    this.filteredProducts = this.products;

    if(!shoppingCartService){
      this.products = productService.getAll();
      this.filteredProducts = this.products; 
    }
    
    route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
      if (this.category && this.products) {
        this.filteredProducts = this.products.map(prods => prods.filter(p => p.category === this.category));
      } else {
        this.filteredProducts = this.products;
      }
      // this.filteredProducts = (this.category && this.products) ? 
      //   this.products.filter(p => p.category === this.category) :
      //   this.products;
    });
  }

  async ngOnInit() {
    this.subscription = (await this.shoppingCartService.getCart())
      .subscribe(cart => this.cart = cart);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}
