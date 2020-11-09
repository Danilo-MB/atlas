import { Product } from './../models/product';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../category.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories$;
  category: string;

  constructor(productService: ProductService, categoryService: CategoryService, route: ActivatedRoute) {
    productService.getAll().subscribe(products => this.products = products);
    this.categories$ = categoryService.getCategories();
    
    route.queryParamMap.subscribe(params => {
      this.category = params.get('category');

      this.filteredProducts = (this.category) ? 
        this.products.filter(p => p.category === this.category) :
        this.products;
    });
   }



}
