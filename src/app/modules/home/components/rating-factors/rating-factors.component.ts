import { Component, OnInit, Input } from '@angular/core';
import { StarRatingColor } from 'src/app/modules/sharedModule/components/rating/rating.component';

@Component({
  selector: 'app-rating-factors',
  templateUrl: './rating-factors.component.html',
  styleUrls: ['./rating-factors.component.scss']
})

export class RatingFactorsComponent implements OnInit {
@Input() ratingFactors = [];
  constructor() { }
  starCount: number = 10;
  starColor: StarRatingColor = StarRatingColor.accent;
  starColorP: StarRatingColor = StarRatingColor.primary;
  starColorW: StarRatingColor = StarRatingColor.warn;
  ngOnInit() {
    console.log(this.ratingFactors)
  }

}
