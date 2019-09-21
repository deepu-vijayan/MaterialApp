import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../../../../core/service/common.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

 public profilePic:String;
 public imgName:String;
 public userName:String;
 public emailId:String;
 public size:string;
 @Input() imgSize:string;
 @Input() profileDetails;
  constructor(private commonService:CommonService) { }

  ngOnInit() {
    if(this.imgSize ==undefined || this.imgSize ==null){
      this.size = '40';
    } else{
      this.size = this.imgSize;
    }

    if(this.profileDetails==undefined){
      this.profileDetails = {email: "deepu.vijayan2007@gmail.com", name: "deepu vijayan", dateOfBirth: null, socialLoginUsed: 4, profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"};
    }
    this.userName = this.imgName = this.profileDetails.name;
    this.emailId = this.profileDetails.email;
    this.profilePic = this.profileDetails.profilePic;
  }

}
