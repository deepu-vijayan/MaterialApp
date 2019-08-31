import { Component, OnInit,ViewChild } from '@angular/core';
import { StarRatingColor } from '../../../sharedModule/components/rating/rating.component';
import { CommonService } from 'src/app/core/service/common.service';
import { PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  content = [];
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

  public config: PerfectScrollbarConfigInterface = {};
  @ViewChild(PerfectScrollbarComponent, {}) componentRef?: PerfectScrollbarComponent;
  constructor(private commonService: CommonService) {

    this.content = [
      {
        title: 'Work Experience',
        subtitles: [
          {
            title: 'Present Company',
            value: 'UBI Soft India Pvt.'
          },
          {
            title: 'Since',
            value: 'May 2017'
          },
          {
            title: 'Designation',
            value: 'Project Manager'
          },
          {
            title: 'Total Years of Experience',
            value: '10+ years'
          }
        ]
      },
      {
        title: 'Personal',
        subtitles: [
          {
            title: 'Date of birth',
            value: '12 Jun 1995'
          },
          {
            title: 'Gender',
            value: 'Male'
          },
          {
            title: 'Marital Status',
            value: 'Single'
          }
        ]
      },
      {
        title: 'Contact',
        subtitles: [
          {
            title: 'Mobile Number',
            value: '9633594287'
          },
          {
            title: 'Email',
            value: 'ajasmm86@gmail.com'
          }
        ]
      }
    ]
  }

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
