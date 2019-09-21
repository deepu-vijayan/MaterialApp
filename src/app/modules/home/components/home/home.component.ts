import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/service/common.service';
import { WebapiService } from 'src/app/core/http/webapi.service';
import { StarRatingColor } from '../../../sharedModule/components/rating/rating.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private commonService: CommonService, private webapiService: WebapiService) { }

  rating:number = 3;

  userName:string;
  imgName:string;
  emailId:string;
  profilePic:string;
  designation:string;
  totalConnections:number =0;
  totalRatingReceived:number = 0;

  starColor:StarRatingColor = StarRatingColor.accent;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.warn;
  public profileDetails;

  ngOnInit() {
    let basicProfileInfo = this.profileDetails = this.commonService.getItem('userInfo');
    this.commonService.showLoading();
    this.webapiService.getUserInfo({appUserId: basicProfileInfo.appUserId}).subscribe(response =>{
      this.commonService.hideLoading();
      if(response){
        this.profileDetails = response;
        this.userName = this.imgName = this.profileDetails.appUser.name;
        this.emailId = this.profileDetails.appUser.email;
        this.profilePic = this.profileDetails.appUser.profilePic;
        this.designation = this.profileDetails.appUser.designation;
        this.rating = this.profileDetails.appUser.appUserDetails.averageRating;
        this.totalConnections = this.profileDetails.appUser.appUserDetails.totalConnections;
        this.totalRatingReceived = this.profileDetails.appUser.appUserDetails.totalRatingReceived;
      }
    },
    (error)=> {
      this.commonService.hideLoading();
      this.commonService.handleError(error);
      this.profileDetails = {"appUserId":35,"appUser":{"id":35,"name":"Deepu Vijayan","email":"deepu.vijayan2007@gmail.com","dateOfBirth":null,"profilePic":"https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2713047988711684&height=350&width=250&ext=1570992986&hash=AeS0UjvwlPrR7gmS","socialLoginUsed":1,"designation":null,"createdDate":"2019-09-13T18:56:27.000+0000","lastUpdatedDate":"2019-09-13T18:56:27.000+0000","appUserDetails":{"id":35,"appUser":35,"averageRating":0,"totalRatingReceived":0,"totalFeedbacksReceived":0,"totalConnections":0,"totalProfileViews":0,"facebookProfile":null,"twitterProfile":null,"linkedinProfile":null,"googleProfile":null,"createdDate":"2019-09-13T18:56:27.000+0000","lastUpdatedDate":"2019-09-13T18:56:27.000+0000"},"fromAppUser":[],"toAppUser":[]},"userRatingList":[],"connectionStatus":"not_connected"};
    })

  }

  onRatingChanged(rating){
    console.log(rating);
    this.rating = rating;
  }

  redirect(event, toPage){
    if(toPage == 'profile'){

    }
  }

}
