import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from '../../../core/service/common.service';
import { WebapiService } from '../../../core/http/webapi.service';
import { SocialApiService } from '../../../core/service/socialapi.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private commonService: CommonService, private webapiService: WebapiService,
     private socialApiService: SocialApiService, private router: Router) { }
  public auth2: any;
  settingsObs: any;
  settingsData:any;
  ngOnInit() {
    this.settingsObs = this.webapiService.loadConfig().subscribe(resp => {
      this.settingsData = resp;
      this.commonService.saveItem('setting', resp);
      this.socialApiService.initializeSdk(resp);
    });
  }

  ngOnDestroy(){
    this.settingsObs.unsubscribe();
  }

  login(event, type) {
    switch(type){
      case "facebook":{
        this.socialApiService.signInWithFaceBook();
      }
      case "google":{
        this.socialApiService.attachSignin(event.currentTarget);
      }
      case "home":{
        this.router.navigate(['home']);
      }
    }
  }

}
