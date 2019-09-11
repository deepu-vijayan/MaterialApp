import { Component, OnInit } from '@angular/core';
import { StarRatingColor } from '../../../sharedModule/components/rating/rating.component';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  dataDoughnut: any;
  dataBarChart:any;
  rating: number = 8;
  starCount: number = 10;
  starColor: StarRatingColor = StarRatingColor.accent;
  starColorP: StarRatingColor = StarRatingColor.primary;
  starColorW: StarRatingColor = StarRatingColor.warn;
  ratingFactors = [];
  chartOptions: any;
  constructor() {
    this.dataBarChart = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'My Second dataset',
              backgroundColor: '#9CCC65',
              borderColor: '#7CB342',
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]
  }
    this.dataDoughnut = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
    this.chartOptions = {
      legend: {
        position: 'right',
        boxWidth : 10
     }
    }
  }

  ngOnInit() {
    this.ratingFactors = [
      {
        factorName: 'Communication',
        starRating: 6,
        totalRatings: "1,48,983",
      },
      {
        factorName: 'Attitude',
        starRating: 7,
        totalRatings: "48,983",
      },
      {
        factorName: 'Integrity',
        starRating: 9,
        totalRatings: "1,48,983",
      },
      {
        factorName: 'Knowledge',
        starRating: 6,
        totalRatings: "8,983",
      },
    ]
  }



}
