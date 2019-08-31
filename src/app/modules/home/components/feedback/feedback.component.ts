import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor() { }

  feedBackList:any[];
  SearchField:string;

  ngOnInit() {
    this.feedBackList = [
      {
        'feedbackOn' : '10:05Am Today',
        'FeedbackMessage': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'
      },
      {
        'feedbackOn' : '12 Jun 2019 11:09AM',
        'FeedbackMessage': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'
      },
      {
        'feedbackOn' : '10 Jun 2019 11:09AM',
        'FeedbackMessage': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'
      },
      {
        'feedbackOn' : '05 Jun 2019 11:09AM',
        'FeedbackMessage': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'
      }
    ]

  }

}
