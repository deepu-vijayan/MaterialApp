import { Component, OnInit, OnDestroy } from '@angular/core';

import { CommonService } from '../app/core/service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'MaterialApp';
  constructor(private commonService: CommonService) {

  }
  ngOnInit(){
    this.commonService.HAS_ERR_MSG.subscribe(val => {
      if (val !== '') {
        this.commonService.showAlertDialog({
          message: val
        });
      }
    });
  }
  ngOnDestroy(){
    this.commonService.HAS_ERR_MSG.unsubscribe();
  }
}
