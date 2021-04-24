import { Review } from './../models/review';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { ReviewsService } from './../reviews.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'reviews-form',
  templateUrl: './reviews-form.component.html',
  styleUrls: ['./reviews-form.component.scss']
})
export class ReviewsFormComponent implements OnInit {
  user: string;
  userImage: string;
  rate: number;

  constructor(private reviewsService: ReviewsService, private authService: AuthService, private router: Router) { }

  save(text: string) {
    let review: Review = {
      reviewText: text,
      date: new Date().getTime(),
      user: this.user,
      image: this.userImage,
      rate: this.rate
    }
    this.reviewsService.create(review);
    window.alert("Gracias por enviarnos su opinión!");
    this.router.navigate(['/']);

  }

  setRate(rate: number) {
    this.rate = rate;
  }


  ngOnInit() {
    this.authService.user$.subscribe(user => this.user = user.displayName);
    this.authService.user$.subscribe(user => this.userImage = user.photoURL);
  }

}
