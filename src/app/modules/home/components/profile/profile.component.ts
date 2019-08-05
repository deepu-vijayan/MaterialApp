import { Component, OnInit } from '@angular/core';
import { StarRatingColor } from '../../../sharedModule/components/rating/rating.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  content = [];
  rating:number = 3;
  starCount:number = 5;
  starColor:StarRatingColor = StarRatingColor.accent;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.warn;
  constructor() {

    this.content = [
      {
        title: 'Personal',
        subtitles: [
          {
            title: 'Date of birth',
            value: '12 Jun 1995'
          },
          {
            title: 'Gender',
            value: 'Male'
          },
          {
            title: 'Marital Status',
            value: 'Single'
          }
        ]
      },
      {
        title: 'Contact',
        subtitles: [
          {
            title: 'Mobile Number',
            value: '9633594287'
          },
          {
            title: 'Email',
            value: 'ajasmm86@gmail.com'
          }
        ]
      }
    ]
  }

  ngOnInit() {
  }

  onRatingChanged(rating){
    console.log(rating);
    this.rating = rating;
  }

}
