import { Component, OnInit, OnDestroy, AfterViewInit, NgZone, ElementRef, ViewChild  } from '@angular/core';
import { CommonService } from '../../../core/service/common.service';
import { WebapiService } from '../../../core/http/webapi.service';
import { SocialApiService } from '../../../core/service/socialapi.service';


import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy,AfterViewInit {

  constructor(private router: Router, private commonService: CommonService, private webapiService: WebapiService, private socialApiService: SocialApiService, private zone:NgZone) { }
  public auth2: any;
  settingsObs: any;
  settingsData:any;
  @ViewChild('googleButton') el:ElementRef;

  ngOnInit() {
    this.commonService.showLoading();
    this.settingsObs = this.webapiService.loadConfig().subscribe(resp => {
      this.settingsData = resp;
      this.commonService.saveItem('setting', resp);
      this.socialApiService.initializeSdk(resp);


    });
  }
  ngAfterViewInit(){
    setTimeout(() =>  {this.socialApiService.attachSignin(document.getElementById('googleSignInButton'));this.commonService.hideLoading();}, 1000);
  }

  ngOnDestroy(){
    this.settingsObs.unsubscribe();
    this.socialApiService.SIGNUP_API.unsubscribe();
  }

  login(event, type) {
    this.commonService.showLoading();
    switch(type){
      case "facebook":{
        this.socialApiService.signInWithFaceBook();
        this.socialApiService.SIGNUP_API.subscribe(data =>{
          if (data !== '') {
            if(data['alreadyRegistered'] !=undefined && data['alreadyRegistered'] == true){
              this.zone.run(() =>this.router.navigate(['home']));
            } else {
              this.zone.run(() =>this.router.navigate(['../authenticate/invite/all']));
            }
          }
          this.commonService.hideLoading();
        })
        break;
      }
      case "google":{
        this.socialApiService.SIGNUP_API.subscribe(data =>{
          if (data !== '') {
            if(data['alreadyRegistered'] !=undefined && data['alreadyRegistered'] == true){
              this.zone.run(() =>this.router.navigate(['home']));
            } else {
              this.zone.run(() =>this.router.navigate(['../authenticate/invite/all']));
            }
          }
          this.commonService.hideLoading();
        })
        break;
      }
      case "home":{
        this.commonService.hideLoading();
        this.router.navigate(['home']);
        break;
      }
      default:{
        this.commonService.hideLoading();
        break;
      }
    }
    //this.router.navigate(['../authenticate/invite/all'])
  }

}
