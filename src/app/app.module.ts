import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeModule } from './modules/home/home.module';

import { CommonService } from './core/service/common.service';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './modules/sharedModule/shared.module';
import { ProfileComponent } from './public/profile/profile.component';
import { SidenavComponent } from './public/sidenav/sidenav.component';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgScrollbarModule,
    ScrollingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HomeModule
  ],
  providers: [
    CommonService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
