import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  appUser;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

}
