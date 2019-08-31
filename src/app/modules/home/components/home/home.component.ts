import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/service/common.service';

import { StarRatingColor } from '../../../sharedModule/components/rating/rating.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  rating:number = 3;
  starCount:number = 5;

  userName:string;
  imgName:string;
  emailId:string;
  profilePic:string;
  designation:string;

  starColor:StarRatingColor = StarRatingColor.accent;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.warn;

  ngOnInit() {
    let basicProfileInfo = this.commonService.getBasicProfileInfo();
    if(basicProfileInfo==undefined){
      basicProfileInfo = {email: "deepu.vijayan2007@gmail.com", name: "deepu vijayan", dateOfBirth: null, socialLoginUsed: 4, profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg", 'designation': "Software Engineer"};
    }
    this.userName = this.imgName = basicProfileInfo.name;
    this.emailId = basicProfileInfo.email;
    this.profilePic = basicProfileInfo.profilePic;
    this.designation = basicProfileInfo.designation;
  }

  onRatingChanged(rating){
    console.log(rating);
    this.rating = rating;
  }

}
