import { Injectable } from '@angular/core';

declare var window: any;
declare var FB: any;
declare const gapi: any;

@Injectable({
  providedIn: 'root'
})

export class SocialApiService {
  appSetting : any;
  auth2: any;

  constructor() { }

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
    FB.login((response) => {
      console.log('submitLogin', response);
      if (response.authResponse) {
        console.log('logged in');
        let userId = response.authResponse.userID;
        FB.api("/" + response.authResponse.userID + "/?fields=gender,email,name,id,picture,birthday", function (response) {
          console.log('api in');
          console.log(response);
          // if (response && !response.error) {
          //   /* handle the result */
          // }
          socialApi.getConnectionsFromFaceBook(userId);
        }
        );
      }
      else {
        console.log('User login failed');
      }
    }, { scope: 'public_profile,email,user_gender,user_birthday' })
  }
  getConnectionsFromFaceBook(id){
    FB.api(
      "/" + id + "/friends",
      'GET',
      {},
      function(response) {
        console.log('friends in');
        console.log(response);
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

      this.getConnectionsFromGoogle();
    }, (error) => {
      alert(JSON.stringify(error, undefined, 2));
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
              fields: 'connections(emailAddresses,names,photos)'
          });
      }).then(
          (res) => {
              console.log(res);
              let filteredResult = this.extractGoogleEmailContacts(res.result.connections);
              console.log(filteredResult);
          },
          error => console.log("ERROR " + JSON.stringify(error))
      );
  });
  }

  extractGoogleEmailContacts(data){
    return data.filter( (contact) => {
      if(contact.emailAddresses !=undefined)
        return contact;
    })
  }
}
