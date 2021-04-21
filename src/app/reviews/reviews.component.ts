import { ReviewsService } from './../reviews.service';
import { Component, OnInit } from '@angular/core';
import { Review } from '../models/review';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviews;


  constructor(private reviewsService: ReviewsService) {

    this.reviewsService.get().subscribe(r => this.reviews = r);

  }



  ngOnInit() {
  }

}
