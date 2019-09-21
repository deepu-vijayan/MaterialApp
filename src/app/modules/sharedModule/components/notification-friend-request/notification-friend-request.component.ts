import { Component, OnInit, Input } from '@angular/core';
import { RequestConnectionComponent } from '../request-connection/request-connection.component';
import { CommonService } from 'src/app/core/service/common.service';

@Component({
  selector: 'app-notification-friend-request',
  templateUrl: './notification-friend-request.component.html',
  styleUrls: ['./notification-friend-request.component.scss']
})
export class NotificationFriendRequestComponent implements OnInit {

  @Input() requestDetails;
  constructor(private commonService: CommonService) { }
  ngOnInit() {

  }

  acceptRequest(event, requestDetails){
    //console.log(requestDetails);
    let popupData =   {
      data:{
        id: requestDetails.id,
        action : 'accept_connection',
        visitProfile : requestDetails.fromAppUserId,
        loginProfile: requestDetails.toAppUserId
      }
    };
    this.commonService.openPopUp(RequestConnectionComponent,popupData);
  }

}
