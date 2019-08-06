import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material.module';



import { ViewButtonComponent } from './components/view-button/view-button.component';
import { TitleComponent } from './components/title/title.component';
import { SubTitleComponent } from './components/sub-title/sub-title.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { LinkComponent } from './components/link/link.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { RatingComponent } from './components/rating/rating.component';
import { FeedbackItemComponent } from './components/feedback-item/feedback-item.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { BoldTitleComponent } from './components/bold-title/bold-title.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { ArrayFilterPipe } from './pipes/arrayFilter.pipe';



import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: true
};
@NgModule({
  declarations: [
    ViewButtonComponent,
    TitleComponent,
    SubTitleComponent,
    AvatarComponent,
    NavLinkComponent,
    LinkComponent,
    SearchBarComponent,
    IconButtonComponent,
    RatingComponent,
    FeedbackItemComponent,
    ActionButtonComponent,
    DialogComponent,
    UserInfoComponent,
    BoldTitleComponent,
    FriendsListComponent,
    ArrayFilterPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PerfectScrollbarModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    ViewButtonComponent,
    TitleComponent,
    SubTitleComponent,
    BoldTitleComponent,
    AvatarComponent,
    NavLinkComponent,
    LinkComponent,
    SearchBarComponent,
    IconButtonComponent,
    RatingComponent,
    FeedbackItemComponent,
    ActionButtonComponent,
    DialogComponent,
    UserInfoComponent,
    FriendsListComponent

  ],
  entryComponents: [DialogComponent],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class SharedModule { }
