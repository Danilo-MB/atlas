import { AuthService } from './auth.service';
import { Review } from './models/review';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private db: AngularFireDatabase, private auth: AuthService) { }

  create(review: Review) {
    this.db.list('/reviews').push(review);
  }

  get() {
    return this.db.list('/reviews').snapshotChanges().pipe(map(r => {
      return r.map(r => {
        const data = r.payload.val();
        return data;
      })
    }));
  }


}
