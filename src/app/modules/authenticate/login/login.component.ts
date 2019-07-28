import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from '../../../core/service/common.service';
import { WebapiService } from '../../../core/http/webapi.service';
import { SocialApiService } from '../../../core/service/socialapi.service';
import { DialogComponent } from '../../sharedModule/components/dialog/dialog.component';

import { MatDialog, MatDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private dialog: MatDialog, private commonService: CommonService, private webapiService: WebapiService, private socialApiService: SocialApiService) { }
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
        let dialogBox = this.dialog.open(DialogComponent, {
          //hasBackdrop: false,
          data: {
            message: 'Error Message'
          }
        });
        dialogBox.afterClosed().subscribe(result => {
          // NOTE: The result can also be nothing if the user presses the `esc` key or clicks outside the dialog
            console.log(result);
            if(result =='ok'){
              dialogBox.close();
            }
        })
        //this.socialApiService.attachSignin(event.currentTarget);
      }
      case "home":{
        this.router.navigate(['home']);
      }
    }
    //this.router.navigate(['../authenticate/invite/all'])
  }

}
