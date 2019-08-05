import { Component, OnInit } from '@angular/core';

import { ProfileComponent } from '../profile/profile.component';
import { PollsComponent } from '../polls/polls.component';
import { RatingComponent } from '../rating/rating.component';
import { ConnectionsPageComponent } from '../connections/connections-page.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  navLinksDesktop = [];
  cardComponent = ProfileComponent;
  constructor() {
    this.navLinksDesktop = [
      {
        title: 'My Profile',
        component: ProfileComponent,
        icon: 'person'
      },
      {
        title: 'Rating & Feedback',
        component: RatingComponent,
        icon: 'insert_comment'
      },
      {
        title: 'Connections',
        component: ConnectionsPageComponent,
        icon: 'group'
      },
      {
        title: 'My Polls',
        component: PollsComponent,
        icon: 'poll'
      }]
   }

  ngOnInit() {
  }

  navItemClicked(link) {
    this.cardComponent = link.component;
  }

}
