import { AuthService } from './../auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppUser } from '../models/app-user';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  appUser: AppUser;

  constructor(private auth: AuthService) {
    
   }

  ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  ngOnDestroy(){
  }


  logout(){
    this.auth.logout();
    this.appUser = null;
  }

}
