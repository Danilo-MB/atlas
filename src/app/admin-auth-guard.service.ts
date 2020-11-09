import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { map } from 'rxjs/internal/operators/map';
import { FirebaseError } from 'firebase';
import { AppUser } from './models/app-user';
import * as firebase from 'firebase';
import 'rxjs/add/observable/fromPromise';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {
  fbUser: firebase.User; 
  datoIsAdmin$: Observable<firebase.User>;
  
  constructor(private auth: AuthService, private userService: UserService) { }

  // canActivate() {
  //   this.fbUser = firebase.auth().currentUser;
  //   return this.userService.get(this.fbUser.uid)
  //   .valueChanges()
  //   .pipe(map((appUser: AppUser) => appUser.isAdmin));
  //   }

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>{
    return this.auth.appUser$.
      map(appUser => appUser.isAdmin);
    }
  
}

// switchMap(user => this.userService.get(user.uid).valueChanges()),
