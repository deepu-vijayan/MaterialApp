import { Component, OnInit } from '@angular/core';

import { CommonService } from '../app/core/service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
}
