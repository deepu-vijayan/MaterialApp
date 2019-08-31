import { Component, OnInit } from '@angular/core';

import { ProfileComponent } from '../profile/profile.component';
import { PollsComponent } from '../polls/polls.component';
import { RatingComponent } from '../rating/rating.component';
import { ConnectionsPageComponent } from '../connections/connections-page.component';
import { HomeComponent } from '../home/home.component';
import { FeedbackComponent } from '../feedback/feedback.component';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  navLinksDesktop = [];
  cardComponent = HomeComponent;
  constructor() {
    this.navLinksDesktop = [
      {
        title: 'Home',
        component: HomeComponent,
        icon: 'home'
      },
      {
        title: 'My Profile',
        component: ProfileComponent,
        icon: 'person'
      },
      {
        title: 'My Rating',
        component: RatingComponent,
        icon: 'star_half'
      },
      {
        title: 'Feedback',
        component: FeedbackComponent,
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
