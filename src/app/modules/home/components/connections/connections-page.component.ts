import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections-page.component.scss']
})
export class ConnectionsPageComponent implements OnInit {

  constructor() { }

  index: number;
  navLinksDesktop=[];
  cardTitle = 'All'
  //navLinksDesktop: { title: string; comp  icon: string; }[];
  ngOnInit() {
    this.navLinksDesktop = [
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

  navItemClicked(link) {
    this.cardTitle = link.title;
  }

}
