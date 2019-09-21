import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonService } from '../app/core/service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'MaterialApp';
  constructor(private routObj: Router, private commonService: CommonService) {

  }
  ngOnInit(){
    this.commonService.HAS_ERR_MSG.subscribe(val => {
      if (val !== '') {
        this.commonService.showAlertDialog({
          message: val
        });
      }
    });

    this.routObj.events.subscribe(obj => {
      if (obj instanceof NavigationEnd) {
        let lastIndx = obj.urlAfterRedirects.lastIndexOf('/');
        let pageName = obj.urlAfterRedirects.slice(lastIndx + 1);
        this.commonService.CURRENT_PAGE.next(pageName);
        console.log('currentPage == > ', this.commonService.CURRENT_PAGE.value);
      }
    })
  }
  ngOnDestroy(){
    this.commonService.HAS_ERR_MSG.unsubscribe();
  }
}
