import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  content = [];
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

}
