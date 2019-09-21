import { Component, OnInit, ViewChild } from '@angular/core';
import { PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
  import { WebapiService } from '../../../../core/http/webapi.service';
  import { CommonService } from '../../../../core/service/common.service'
@Component({
  selector: 'app-notification-popup',
  templateUrl: './notification-popup.component.html',
  styleUrls: ['./notification-popup.component.scss']
})
export class NotificationPopupComponent implements OnInit {

  constructor(private webapiService:WebapiService, private commonService: CommonService) { }
  public friendRequestList;
  public config: PerfectScrollbarConfigInterface = {};
  @ViewChild(PerfectScrollbarComponent, {}) componentRef?: PerfectScrollbarComponent;
  public notificationLoadingFlag:boolean = true;
  ngOnInit() {

    this.commonService.PULL_NOTIFICATION.subscribe(status =>{
      this.notificationLoadingFlag = true;
      this.getNotifications();
    })
  }

  getNotifications(){
    let basicProfileInfo = this.commonService.getItem('userInfo');
    let data = { appUserId : basicProfileInfo.appUserId}
    this.webapiService.getAllConnectionRequests(data).subscribe(resp =>{
      this.notificationLoadingFlag = false;
      this.friendRequestList = resp;
      console.log(resp);
    },
    error=>{
      this.notificationLoadingFlag = false;
      this.commonService.handleError(error);
      console.log(error);
    })
  }

}
