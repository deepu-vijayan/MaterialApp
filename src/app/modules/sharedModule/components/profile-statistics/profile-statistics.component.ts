import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-statistics',
  templateUrl: './profile-statistics.component.html',
  styleUrls: ['./profile-statistics.component.scss']
})
export class ProfileStatisticsComponent implements OnInit {

  constructor() { }
  @Input () value;
  @Input () materialIcon;
  @Input () label;
  ngOnInit() {
  }

}
