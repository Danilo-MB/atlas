import { Router } from '@angular/router';
import { ReviewsService } from './../reviews.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reviews-form',
  templateUrl: './reviews-form.component.html',
  styleUrls: ['./reviews-form.component.scss']
})
export class ReviewsFormComponent implements OnInit {

  constructor(private reviewsService: ReviewsService, private router: Router) { }

  save(review) {
    this.reviewsService.create(review);

  }

  ngOnInit() {
  }

}
