import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonService } from '../../../core/service/common.service';

declare var window: any;
declare var FB: any;

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor(private commonService: CommonService) { }
  public auth2: any;
  private myClientId: string = '706301155849-j4p6js45av4p1vpu1mhffmfurjqgrquf.apps.googleusercontent.com';


  ngOnInit() {
    this.fbInit();
    this.googleInit();
  }
  ngAfterViewInit(){
    this.googleAuthenticate();
  }
  googleInit(){
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[1];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  }

  googleAuthenticate() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '706301155849-j4p6js45av4p1vpu1mhffmfurjqgrquf.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email https://www.googleapis.com/auth/contacts.readonly'
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }
  fetchmail() {
    // gapi.load('client:auth2', () => {
    //     gapi.client.init({
    //         apiKey: 'API_KEY use your own',
    //         discoveryDocs: ['https://people.googleapis.com/$discovery/rest?version=v1'],
    //         clientId: '706301155849-j4p6js45av4p1vpu1mhffmfurjqgrquf.apps.googleusercontent.com',
    //         scope: 'profile email https://www.googleapis.com/auth/contacts.readonly'
    //     }).then(() => {
    //         return gapi.client.people.people.connections.list({
    //             resourceName:'people/me',
    //             personFields: 'emailAddresses,names'
    //         });
    //     }).then(
    //         (res) => {
    //             console.log("Res: " + JSON.stringify(res));
    //             //this.userContacts.emit(this.transformToMailListModel(res.result));
    //         },
    //         error => console.log("ERROR " + JSON.stringify(error))
    //     );
    // });
  }
  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {

        let profile = googleUser.getBasicProfile();
        console.log(profile);
        let token = googleUser.getAuthResponse().id_token;
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        //YOUR CODE HERE
        gapi.load('client:auth2', () => {
          gapi.client.init({
              apiKey: 'AIzaSyDOp177mdqgAqEREBOV8UgGwQojXDVtqLQ',
              discoveryDocs: ['https://people.googleapis.com/$discovery/rest?version=v1'],
              clientId: '706301155849-j4p6js45av4p1vpu1mhffmfurjqgrquf.apps.googleusercontent.com',
              scope: 'profile email https://www.googleapis.com/auth/contacts.readonly'
          }).then(() => {
              return gapi.client.people.people.connections.list({
                  resourceName:'people/me',
                  personFields: 'names,photos,emailAddresses',
                  sortOrder: 'LAST_MODIFIED_DESCENDING',
                  fields: 'connections(emailAddresses,names,photos)'
              });
          }).then(
              (res) => {
                  console.log(res);
                  let filteredResult = this.commonService.extractGoogleEmailContacts(res.result.connections);
                  console.log(filteredResult);
                  //this.userContacts.emit(this.transformToMailListModel(res.result));
              },
              error => console.log("ERROR " + JSON.stringify(error))
          );
      });

      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  fbInit() {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
    (window as any).fbAsyncInit = function () {
      FB.init({
        appId: '1292363224251429',
        cookie: true,
        xfbml: true,
        version: 'v3.3'
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
  fbLogin() {
    console.log("submit login to facebook");
    FB.login((response) => {
      console.log('submitLogin', response);
      if (response.authResponse) {
        console.log('logged in');
        let userId = response.authResponse.userID;
        FB.api("/" + response.authResponse.userID + "/?fields=gender,email,name,id,picture", function (response) {
          //FB.api("/me?fields=name,id,email,birthday",function (response) {
          console.log('api in');
          console.log(response);
          // if (response && !response.error) {
          //   /* handle the result */
          // }
          FB.api(
            "/" + userId + "/friends",
            'GET',
            {},
            function(response) {
              console.log('friends in');
              console.log(response);
                // Insert your code here
            }
          );
        }
        );
        //login success
        //login success code here
        //redirect to home page
      }
      else {
        console.log('User login failed');
      }
    }, { scope: 'public_profile,email,user_gender,user_birthday' })


  }

}
