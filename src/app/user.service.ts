import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AppUser } from './models/app-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User){
    this.get(user.uid).update({
      name: user.displayName,
      email: user.email,
      image: user.photoURL
    });
  }

  get(uid: string): AngularFireObject<AppUser>{
      return this.db.object('/users/' + uid);
  }
}
