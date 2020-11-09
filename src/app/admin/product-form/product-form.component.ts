import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product: any = { };
  id;

  constructor(
    private categoryService: CategoryService, 
    private productService: ProductService, 
    private route: ActivatedRoute,
    private router: Router) {

    this.categories$ = categoryService.getCategories();
    this.id = this.route.snapshot.paramMap.get('key');
    if(this.id) this.productService.get(this.id).take(1).subscribe(p => this.product = p);
  }

  save(product){
    if(this.id) this.productService.update(this.id, product);
    else this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }

  delete(){
    if(!confirm('Are you sure you want to delete thie product?')) return; 
    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit() {
  }

}
