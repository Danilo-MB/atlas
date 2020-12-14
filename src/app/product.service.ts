import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  constructor(private db: AngularFireDatabase) { }

  create(product){
    return this.db.list('/products').push(product);
  }

  getAll(): Observable<Product[]>{
    return this.db.list<any>('/products').snapshotChanges().pipe(map(a => {
      return a.map(a => {
        const data = a.payload.val();
        data.key = a.key;
        return data;
      })
    }));
  }

  get(productId){
    return this.db.object('/products/' + productId).valueChanges();
  }

  update(productId, product){
    //console.log(productId + " productId");
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId){
    return this.db.object('/products/' + productId).remove();
  }

}
