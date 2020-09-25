import { AuthService } from './../auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  

  constructor(public auth: AuthService) {
    
   }

  ngOnInit() {
  }

  ngOnDestroy(){
  }


  logout(){
    this.auth.logout();
  }

}
