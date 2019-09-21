import { Component, OnInit, ViewChild, NgZone, OnDestroy } from '@angular/core';
import { StarRatingColor } from '../../../sharedModule/components/rating/rating.component';
import { CommonService } from 'src/app/core/service/common.service';
import { PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { WebapiService } from 'src/app/core/http/webapi.service';

import { RequestConnectionComponent } from '../../../sharedModule/components/request-connection/request-connection.component';
import { AddRatingComponent } from '../add-rating/add-rating.component';
import { AddFeedbackComponent } from '../add-feedback/add-feedback.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  content = [];
  rating:number = 3;
  userName:string;
  imgName:string;
  emailId:string;
  profilePic:string;
  designation:string;
  starColor:StarRatingColor = StarRatingColor.accent;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.warn;
  visitProfile:boolean = false;
  visitProfileDetails: any;
  profileInfo:any;
  singinInfo:any;
  connectionStatus:string;

  public config: PerfectScrollbarConfigInterface = {};
  @ViewChild(PerfectScrollbarComponent, {}) componentRef?: PerfectScrollbarComponent;
  profileDetails: any;
  totalConnections: any;
  totalRatingReceived: any;
  totalProfileViews: any;
  constructor(private commonService: CommonService, private webapiService: WebapiService, private zone:NgZone) {


  }

  ngOnInit() {
    let basicProfileInfo = this.singinInfo = this.profileDetails = this.commonService.getItem('userInfo');
    let appUserIdToFetchDetails = {appUserId: basicProfileInfo.appUserId};
    this.profileInfo = this.commonService.VIEW_PROFILE.subscribe((connectionProfile)=>{
      if(! this.commonService.isEmpty(connectionProfile)) {
        console.log('inside profile');
        console.log(connectionProfile);
        this.visitProfileDetails  = connectionProfile;
        this.visitProfile = true;
        //this.commonService.viewConnectionProfile({});
        if(this.visitProfile == true){
          appUserIdToFetchDetails['secondUserId'] = this.visitProfileDetails.appUserDetails.appUser;
          this.setProfileView(appUserIdToFetchDetails);
        }
      }
    });
    if(this.visitProfile == true){
      this.profileInfo.unsubscribe();
    }
    this.setProfileView(appUserIdToFetchDetails);

  }
  setProfileView(appUserIdToFetchDetails){
    this.commonService.showLoading();
    let setProfileDetails;

    this.webapiService.getUserInfo(appUserIdToFetchDetails).subscribe(response =>{
      this.commonService.hideLoading();
      if(response){
        this.profileDetails = response;
        setProfileDetails = this.profileDetails.appUser;
        if(this.visitProfile == true){
          setProfileDetails = this.profileDetails.secondUser;
        }
        this.userName = this.imgName = setProfileDetails.name;
        this.emailId = setProfileDetails.email;
        this.profilePic = setProfileDetails.profilePic;
        this.designation =setProfileDetails.designation;
        this.rating = setProfileDetails.appUserDetails.averageRating;
        this.totalConnections = setProfileDetails.appUserDetails.totalConnections;
        this.totalRatingReceived = setProfileDetails.appUserDetails.totalRatingReceived;
        this.totalProfileViews = setProfileDetails.appUserDetails.totalProfileViews;
        this.connectionStatus = this.profileDetails.connectionStatus;
        this.commonService.viewConnectionProfile(null);
        this.content = [
          {
            title: 'Work Experience',
            subtitles: [
              {
                title: 'Present Company',
                value: '-'
              },
              {
                title: 'Since',
                value: '-'
              },
              {
                title: 'Designation',
                value: this.designation
              },
              {
                title: 'Total Years of Experience',
                value: '-'
              }
            ]
          },
          {
            title: 'Personal',
            subtitles: [
              {
                title: 'Date of birth',
                value: '-'
              },
              {
                title: 'Gender',
                value: '-'
              },
              {
                title: 'Marital Status',
                value: '-'
              }
            ]
          },
          {
            title: 'Contact',
            subtitles: [
              {
                title: 'Mobile Number',
                value: '-'
              },
              {
                title: 'Email',
                value: this.emailId
              }
            ]
          }
        ]
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
  ngOnDistroy(){
    this.profileInfo.unsubscribe();
    this.commonService.viewConnectionProfile(this.singinInfo);
    this.visitProfile == false;
  }

  addConnection(event){
    let popupData =   {
      data:{
        action : 'request_connection',
        visitProfile : this.visitProfileDetails,
        loginProfile: this.singinInfo
      }
    };
    this.commonService.openPopUp(RequestConnectionComponent,popupData);
  }
  giveRating(event){
    let popupData =   {
      width: '70%',
      data:{
        action : 'add_rating',
        visitProfile : this.visitProfileDetails,
        loginProfile: this.singinInfo
      }
    }
    this.commonService.openPopUp(AddRatingComponent, popupData)
  }
  giveFeedback(){
    let popupData =   {
      width: '60%',
      data:{
        action : 'add_rating',
        visitProfile : this.visitProfileDetails,
        loginProfile: this.singinInfo
      }
    }
    this.commonService.openPopUp(AddFeedbackComponent, popupData)
  }
}
