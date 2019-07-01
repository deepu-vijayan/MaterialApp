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
    FeedbackItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    ViewButtonComponent,
    TitleComponent,
    SubTitleComponent,
    AvatarComponent,
    NavLinkComponent,
    LinkComponent,
    SearchBarComponent,
    IconButtonComponent,
    RatingComponent,
    FeedbackItemComponent
  ]
})
export class SharedModule { }