import { Component, OnInit } from '@angular/core';
import { ConnectedProfilesComponent } from '../connected-profiles/connected-profiles.component';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  navLinksDesktop=[];
  cardTitle = 'All'
  //navLinksDesktop: { title: string; comp  icon: string; }[];

  constructor() { this.navLinksDesktop = [
    {
      title: 'All',
      //component: ConnectedProfilesComponent,
      count: '4,893'
    },
    {
      title: 'Friends',
      //component: ConnectedProfilesComponent,
      count: '2,431'
    },
    {
      title: 'Family',
      //component: ConnectedProfilesComponent,
      count: '831'
    },
    {
      title: 'Seniors',
      //component: ConnectedProfilesComponent,
      count: '1,501'
    },
    {
      title: 'Juniors',
      //component: ConnectedProfilesComponent,
      count: '689'
    }]
 }
  index: number;
  ngOnInit() {
  }
  navItemClicked(link) {
    this.cardTitle = link.title;
  }

}
