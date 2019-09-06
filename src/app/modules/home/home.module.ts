import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeRoutingModule } from './home.routing.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeadernavComponent } from './components/headernav/headernav.component';
import { ContentComponent } from './components/content/content.component';
import { SharedModule } from '../sharedModule/shared.module';
import { ProfileComponent } from './components/profile/profile.component';
import { RatingComponent } from './components/rating/rating.component';
import { ConnectionsPageComponent } from './components/connections/connections-page.component';
import { PollsComponent } from './components/polls/polls.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './components/home/home.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FeedbackComponent } from './components/feedback/feedback.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: true
};
import { ModalModule } from 'src/app/_modal';
import { ConnectedProfilesComponent } from './components/connected-profiles/connected-profiles.component';
import { NotificationPopupComponent } from './components/notification-popup/notification-popup.component';
@NgModule({
  declarations: [LayoutComponent, SidenavComponent, HeadernavComponent,
    ContentComponent, ProfileComponent, RatingComponent, ConnectionsPageComponent, PollsComponent, HomeComponent, FeedbackComponent, ConnectedProfilesComponent, NotificationPopupComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    PerfectScrollbarModule,
    ModalModule
  ],
  entryComponents:[ProfileComponent, RatingComponent, ConnectionsPageComponent, PollsComponent, HomeComponent, FeedbackComponent, ConnectedProfilesComponent],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class HomeModule { }
