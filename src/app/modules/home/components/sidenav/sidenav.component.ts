import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

import { ProfileComponent } from '../profile/profile.component';
import { PollsComponent } from '../polls/polls.component';
import { RatingComponent } from '../rating/rating.component';
import { ConnectionsPageComponent } from '../connections/connections-page.component';
import { HomeComponent } from '../home/home.component';
import { FeedbackComponent } from '../feedback/feedback.component';
import { SearchResultComponent } from "../search-result/search-result.component";
import { CommonService } from '../../../../core/service/common.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit,OnChanges {
  navLinksDesktop = [];
  cardComponent = HomeComponent;
  selectedItem ;
  @Input() search;
  constructor( private commonService:CommonService){}

  ngOnInit() {
    this.navLinksDesktop = [
      {
        title: 'Home',
        component: HomeComponent,
        icon: 'home',
        inMenu : true
      },
      {
        title: 'My Profile',
        component: ProfileComponent,
        icon: 'person',
        inMenu : true
      },
      {
        title: 'My Rating',
        component: RatingComponent,
        icon: 'star_half',
        inMenu : true
      },
      {
        title: 'Feedback',
        component: FeedbackComponent,
        icon: 'insert_comment',
        inMenu : true
      },
      {
        title: 'Connections',
        component: ConnectionsPageComponent,
        icon: 'group',
        inMenu : true
      },
      {
        title: 'My Polls',
        component: PollsComponent,
        icon: 'poll',
        inMenu : true
      },
      {
        title: 'Search',
        component: SearchResultComponent,
        icon: 'search',
        inMenu : false
      }
    ];
    if(this.search !=null || this.search !=undefined) {
      console.log('inside sidenam component selector');
      this.selectedItem = this.navLinksDesktop[this.navLinksDesktop.length];
    } else{
      this.selectedItem = this.navLinksDesktop[0];
    }
    let profileInfo = this.commonService.VIEW_PROFILE.subscribe((connectionProfile)=>{

      if(connectionProfile!= null && connectionProfile.appUserDetails != undefined && connectionProfile.appUserDetails != null){
        this.selectedItem = this.navLinksDesktop[1];
        this.cardComponent = this.navLinksDesktop[1].component;
        //profileInfo.unsubscribe();
      }
    })

  }

  ngOnChanges(changes: SimpleChanges) {
    const search: SimpleChange = changes.search;
    //console.log('prev value: ', search.previousValue);
    //console.log('got name: ', JSON.parse(search.currentValue));
    //this._name = name.currentValue.toUpperCase();
    if(search.currentValue !=undefined && search.currentValue!=null){
      let searchData = Object.assign({}, search.currentValue);
      this.commonService.setSearchCriteria(searchData);
      console.log('inside onchange');
      console.log(this.search);
      if(searchData  !=undefined && searchData!=null){
        this.cardComponent = this.navLinksDesktop[this.navLinksDesktop.length-1].component;
        this.selectedItem = this.navLinksDesktop[this.navLinksDesktop.length-1];
      }
    }
  }

  navItemClicked(link) {
    this.cardComponent = link.component;
    this.selectedItem = link;
  }

}
