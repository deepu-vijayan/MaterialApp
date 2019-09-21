import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../../../../core/service/common.service';
@Component({
  selector: 'app-profile-complete',
  templateUrl: './profile-complete.component.html',
  styleUrls: ['./profile-complete.component.scss']
})
export class ProfileCompleteComponent implements OnInit {

  public profileId:string;
  public profileDetails;
  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.profileDetails = this.commonService.getBasicProfileInfo();
    this.profileId = this.profileDetails.appUserId;
  }

}
