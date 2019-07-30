import { Component, OnInit, OnDestroy,AfterViewChecked, NgZone  } from '@angular/core';
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
export class LoginComponent implements OnInit, OnDestroy,AfterViewChecked {

  constructor(private router: Router, private commonService: CommonService, private webapiService: WebapiService, private socialApiService: SocialApiService, private zone:NgZone) { }
  public auth2: any;
  settingsObs: any;
  settingsData:any;
  ngOnInit() {
    this.settingsObs = this.webapiService.loadConfig().subscribe(resp => {
      this.settingsData = resp;
      this.commonService.saveItem('setting', resp);
      this.socialApiService.initializeSdk(resp);
      setTimeout(() =>  {this.socialApiService.attachSignin(document.getElementById('googleSignInButton'));}, 1000);
    });
  }
  ngAfterViewChecked(){

  }

  ngOnDestroy(){
    this.settingsObs.unsubscribe();
    this.socialApiService.SIGNUP_API.unsubscribe();
  }

  login(event, type) {
    switch(type){
      case "facebook":{
        this.socialApiService.signInWithFaceBook();
        break;
      }
      case "google":{
        this.socialApiService.SIGNUP_API.subscribe(data =>{
          if (data !== '') {
          console.log('sign up complete');
          console.log(data);
          this.zone.run(() =>this.router.navigate(['../authenticate/invite/all']));
          }
        })
        break;
      }
      case "home":{
        this.router.navigate(['home']);
        break;
      }
    }
    //this.router.navigate(['../authenticate/invite/all'])
  }

}
