import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../../../../core/service/common.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

 public profileImage:String;
 public imgName:String;
 public userName:String;
 public emailId:String;

  constructor(private commonService:CommonService) { }

  ngOnInit() {
    let basicProfileInfo = this.commonService.getBasicProfileInfo();
    if(basicProfileInfo==undefined){
      basicProfileInfo = {email: "deepu.vijayan2007@gmail.com", name: "deepu vijayan", dateOfBirth: null, socialLoginUsed: 4, profileImage: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"};
    }
    this.userName = this.imgName = basicProfileInfo.name;
    this.emailId = basicProfileInfo.email;
    this.profileImage = basicProfileInfo.profileImage;
  }

}
