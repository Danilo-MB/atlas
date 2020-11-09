import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { EMPTY, Observable } from 'rxjs';
import { AppUser } from './models/app-user';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { map } from 'rxjs/internal/operators/map';
import { flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, private userService: UserService, private router: Router) { 
    this.user$ = afAuth.authState;
  }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }

  get appUser$(): Observable<AppUser> {
    //return this.user$.pipe(switchMap(user => this.userService.get(user.uid).valueChanges()));
    return this.user$.pipe(flatMap(user => user ? this.userService.get(user.uid).valueChanges() : EMPTY));
  }
}
