import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/service/common.service';

@Component({
  selector: 'app-headernav',
  templateUrl: './headernav.component.html',
  styleUrls: ['./headernav.component.scss']
})
export class HeadernavComponent implements OnInit {

  constructor(private commonService:CommonService ) { }
  profilePic:string ='';
  SearchField:string = '';
  userName:string = '';
  ngOnInit() {
    let basicProfileInfo = this.commonService.getBasicProfileInfo();
    if(basicProfileInfo==undefined){
      basicProfileInfo = {email: "deepu.vijayan2007@gmail.com", name: "deepu vijayan", dateOfBirth: null, socialLoginUsed: 4, profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"};
    }
    this.profilePic = basicProfileInfo.profilePic;
    this.userName = basicProfileInfo.name;
  }

}
