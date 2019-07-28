import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeadernavComponent } from './components/headernav/headernav.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [HomeComponent, SidenavComponent, HeadernavComponent, ContentComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
