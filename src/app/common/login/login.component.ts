import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var window: any;
declare var FB: any;

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor() { }
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
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }
  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {

        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        //YOUR CODE HERE


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
        FB.api("/" + response.authResponse.userID + "/?fields=gender,email,name,id,picture", function (response) {
          //FB.api("/me?fields=name,id,email,birthday",function (response) {
          console.log('api in');
          console.log(response);
          // if (response && !response.error) {
          //   /* handle the result */
          // }
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
