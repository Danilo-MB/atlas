import { ReviewsService } from './../reviews.service';
import { AppUser } from '../models/app-user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviews;
  appUser: AppUser;

  constructor(private reviewsService: ReviewsService, private auth: AuthService) {

    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.reviewsService.get().subscribe(r => this.reviews = r);

  }



  ngOnInit() {
  }

}
