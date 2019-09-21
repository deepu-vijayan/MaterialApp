import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-charts',
  templateUrl: './rating-charts.component.html',
  styleUrls: ['./rating-charts.component.scss']
})
export class RatingChartsComponent implements OnInit {

  dataDoughnut: any;
  dataBarChart:any;
  chartOptionsBar: any;
  chartOptionsDoughnut: any;
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

  }



}
