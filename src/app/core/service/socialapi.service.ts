import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { LoginModel} from '../../shared/models/model';
import { CommonService } from '../service/common.service';
import { Router } from "@angular/router"
import { WebapiService } from '../http/webapi.service';

declare var window: any;
declare var FB: any;
declare const gapi: any;

@Injectable({
  providedIn: 'root'
})

export class SocialApiService {
  appSetting : any;
  auth2: any;
  loginDataSubject = new Subject<any>();
  public SIGNUP_API = new Subject<any>();

  constructor(private router: Router, private commonService: CommonService,private webapiService: WebapiService) { }

  initializeSdk(setting){
    this.appSetting = setting;
    if(setting.socialMediaSetting.enableFaceBook == true){
      this.initiateFaceBook(setting);
    }
    if(setting.socialMediaSetting.enableGoogle == true){
      this.initiateGoogle(setting);
    }
  }

  initiateFaceBook(setting){
    if (window.FB) {
      window.FB.XFBML.parse();
    }
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId: setting.faceBookCredentials.appId,
        cookie: true,
        xfbml: true,
        version: setting.faceBookCredentials.version
      });

      FB.AppEvents.logPageView();

    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
  signInWithFaceBook(){
    let socialApi = this;
    let webServiceApi = this.webapiService;
    let commonService = this.commonService;
    FB.login((response) => {
      if (response.authResponse) {
        let userId = response.authResponse.userID;
        FB.api("/" + response.authResponse.userID + "/?fields=gender,email,name,id,picture.width(250).height(350),birthday&height=350&width=250", function (response) {
          if (response && !response.error) {
            /* handle the result */
            let formatedInput = socialApi.formatLoginData('fb', response);
            webServiceApi.registerApi(formatedInput).subscribe(
              data  => {

                console.log("POST Request is successful ", data);
                if(data['appUserId'] != null && data['appUserId'] != undefined){
                  formatedInput['appUserId'] = data['appUserId'];
                  socialApi.commonService.setBasicProfileInfo(formatedInput);
                  if(data['alreadyRegistered'] == true){
                    socialApi.SIGNUP_API.next({"alreadyRegistered": data['alreadyRegistered']});
                  } else{
                    socialApi.getConnectionsFromFaceBook(response.userId);
                  }
                }
              },
              error  => {
                let errorMessage = 'Please try again'
                commonService.HAS_ERR_MSG.next(errorMessage);
                commonService.hideLoading();
              })
          }
          //socialApi.getConnectionsFromFaceBook(userId);
        }
        );
      }
      else {
        //console.log('User login failed');
        commonService.HAS_ERR_MSG.next('User login failed');
        commonService.hideLoading();
      }
    }, { scope: 'public_profile,email,user_gender,user_birthday' })
  }
  getConnectionsFromFaceBook(id){
    let socialApi = this;
    FB.api(
      "/" + id + "/friends",
      'GET',
      {},
      function(response) {
        console.log('friends in');
        console.log(response);
        socialApi.commonService.hideLoading();
        if(! socialApi.commonService.isEmpty(response.error)){
          socialApi.commonService.HAS_ERR_MSG.next("Unexpected error in fetching friends list from facebook")
        }
      }
    );
  }

  initiateGoogle(setting){
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: setting.googleCredentials.clientId,
        cookiepolicy: 'single_host_origin',
        scope: 'profile email https://www.googleapis.com/auth/contacts.readonly'
      });
    });

  }
  attachSignin(element){
  let socialApi = this;
  this.auth2.attachClickHandler(element, {},
    (googleUser) => {

      let profile = googleUser.getBasicProfile();
      //console.log(profile);
      let token = googleUser.getAuthResponse().id_token;
      // console.log('Token || ' + googleUser.getAuthResponse().id_token);
      // console.log('ID: ' + profile.getId());
      // console.log('Name: ' + profile.getName());
      // console.log('Image URL: ' + profile.getImageUrl());
      // console.log('Email: ' + profile.getEmail());
      //YOUR CODE HERE
      let formatedInput = socialApi.formatLoginData('google',profile);
      this.webapiService.registerApi(formatedInput).subscribe(
        data  => {

          console.log("POST Request is successful ", data);
          if(data['appUserId'] != null && data['appUserId'] != undefined){
            formatedInput['appUserId'] = data['appUserId'];
            this.commonService.setBasicProfileInfo(formatedInput);
            if(data['alreadyRegistered'] == true){
              this.SIGNUP_API.next({"alreadyRegistered": data['alreadyRegistered']});
            } else{
              this.getConnectionsFromGoogle();
            }
          }
        },
        error  => {
          let errorMessage = 'Please try again'
          socialApi.commonService.HAS_ERR_MSG.next(errorMessage);
          socialApi.commonService.hideLoading();
        })
    }, (errors) => {
      let errMessage = '';
      if(errors.error =='popup_closed_by_user')
        errMessage = 'The user closed the popup before finishing the sign in';
      else if(errors.error =='popupaccess_denied_closed_by_user' || errors.error =='access_denied')
        errMessage = 'The user denied the permission';
      else if(errors.error =='immediate_failed')
        errMessage = 'The user denied the permission';
      else
        errMessage = errors.error;
      this.commonService.HAS_ERR_MSG.next(errMessage);
      //alert(JSON.stringify(error, undefined, 2));
    });
  }

  getConnectionsFromGoogle(){
    gapi.load('client:auth2', () => {
      gapi.client.init({
          apiKey: this.appSetting.googleCredentials.apiKey,
          discoveryDocs: ['https://people.googleapis.com/$discovery/rest?version=v1'],
          clientId: this.appSetting.googleCredentials.clientId,
          scope: 'profile email https://www.googleapis.com/auth/contacts.readonly'
      }).then(() => {
          return gapi.client.people.people.connections.list({
              resourceName:'people/me',
              personFields: 'names,photos,emailAddresses',
              sortOrder: 'LAST_MODIFIED_DESCENDING',
              fields: 'connections(emailAddresses,names,photos)',
              pageSize: 2000
          });
      }).then(
          (res) => {
              //console.log(res);
              let filteredResult = this.extractGoogleEmailContacts(res.result.connections);
              this.commonService.setConnectionList(filteredResult);
              this.SIGNUP_API.next(filteredResult);
              //this.router.navigate(['../authenticate/invite/all'])
          },
          error => this.commonService.HAS_ERR_MSG.next(JSON.stringify(error))
      );
  });
  }

  extractGoogleEmailContacts(data){
    let emailList:any =[];
    let emailListWithImage:any =[];
    let profileInfo = this.commonService.getBasicProfileInfo();
    data.filter( (contact) => {
      if(contact.emailAddresses !=undefined && contact.names !=undefined){
        emailList.push({
          fromAppuserId: profileInfo.appUserId,
          toEmail: contact.emailAddresses[0]['value']
        });
        emailListWithImage.push({
          fromAppuserId: profileInfo.appUserId,
          toEmail: contact.emailAddresses[0]['value'],
          //profilePic: contact.photos[0]['url'],
          //name: contact.names[0]['displayName']
          status:1,
          notifyType:1,
          createdDate : this.commonService.getCurrentDate(),
          lastUpdatedDate: this.commonService.getCurrentDate()
        });
        return contact;
      }
    })
    this.commonService.setConnectionDetailList(emailListWithImage);
    return emailList;
  }

  formatLoginData(type:string, data){
    switch (type) {
      case 'fb':
        return this.formatFbData(data)
      case 'google':
        return this.formatGoogleData(data)
    }
  }
  formatFbData(data){
    let formatedDetails = new LoginModel();
    formatedDetails['email'] = data.email;
    formatedDetails['name'] = data.name;
    formatedDetails['socialLoginUsed'] = 1;
    formatedDetails['dateOfBirth'] = null;//data.birthday;
    formatedDetails['profilePic'] = data.picture.data.url;
    formatedDetails['designation'] = null;
    return formatedDetails;
  }
  formatGoogleData(data){
    let formatedDetails = {};
    formatedDetails['email'] = data.getEmail();
    formatedDetails['name'] = data.getName();
    formatedDetails['socialLoginUsed'] = 4;
    formatedDetails['dateOfBirth'] = null;
    formatedDetails['profilePic'] = data.getImageUrl();
    formatedDetails['designation'] = null;
    return formatedDetails;
  }
}
