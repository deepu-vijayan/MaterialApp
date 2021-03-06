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
  chartOptionsBar: any;
  chartOptionsDoughnut: any;
  chartData:any;
  constructor() {
    this.dataBarChart = {
      labels: ['JUN18', 'JUL18', 'AUG18', 'SEP18'],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [65, 59, 80, 81, 56, 55, 40]
          }
      ]
  }
  this.chartOptionsBar = {
    legend: {display: false}
  }
    this.dataDoughnut = {
      labels: ['Friends', 'Relatives', 'Family','Seniors','juniors'],
      datasets: [
        {
          data: [300, 50, 100,66,85],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            '#1E88E5',
            '#42A5F5'
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            '#1E88E5',
            '#42A5F5'
          ]
        }]
    };
    this.chartOptionsDoughnut = {
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
