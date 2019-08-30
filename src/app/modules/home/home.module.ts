import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
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

@NgModule({
  declarations: [HomeComponent, SidenavComponent, HeadernavComponent,
    ContentComponent, ProfileComponent, RatingComponent, ConnectionsPageComponent, PollsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
    FlexLayoutModule
  ],
  entryComponents:[ProfileComponent, RatingComponent, ConnectionsPageComponent, PollsComponent]
})
export class HomeModule { }
