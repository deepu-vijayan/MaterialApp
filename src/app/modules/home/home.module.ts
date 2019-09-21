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
import { SearchResultComponent } from './components/search-result/search-result.component';
import { CustomerMenuFilter } from '../sharedModule/pipes/menuFilter.pipe';
import { AddRatingComponent } from './components/add-rating/add-rating.component';
import { AddFeedbackComponent } from './components/add-feedback/add-feedback.component';

import { RatingFactorsComponent } from './components/rating-factors/rating-factors.component';
import { ChartsModule } from 'ng2-charts';
import {ChartModule} from 'primeng/chart';
import { RatingChartsComponent } from './components/rating-charts/rating-charts.component';
import { KnowledgeStatusPopupComponent } from './components/knowledge-status-popup/knowledge-status-popup.component';
@NgModule({
  declarations: [LayoutComponent, SidenavComponent, HeadernavComponent,
    ContentComponent, ProfileComponent, RatingComponent, ConnectionsPageComponent,
    PollsComponent, HomeComponent, FeedbackComponent, ConnectedProfilesComponent, NotificationPopupComponent,
    SearchResultComponent, CustomerMenuFilter, AddRatingComponent, AddFeedbackComponent, RatingFactorsComponent, RatingChartsComponent, KnowledgeStatusPopupComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    PerfectScrollbarModule,
    ModalModule,
    ChartsModule,
    ChartModule
  ],
  exports: [
    SidenavComponent, HeadernavComponent, ProfileComponent
  ],
  entryComponents:[ProfileComponent, RatingComponent, ConnectionsPageComponent, PollsComponent, HomeComponent, FeedbackComponent, ConnectedProfilesComponent, SearchResultComponent, AddRatingComponent, AddFeedbackComponent],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class HomeModule { }
