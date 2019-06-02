import { Component, OnInit } from '@angular/core';
declare var window: any;

declare var FB: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (window.FB) {
        window.FB.XFBML.parse();
    }
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '1292363224251429',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.3'
      });

      FB.AppEvents.logPageView();

      // FB.Event.subscribe('auth.statusChange', (response => {

      //     if (response.status === 'connected') {
      //        console.log('logged in')
      //     }

      // }));

    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));


  }
  fbLogin(){
    console.log("submit login to facebook");
    FB.login((response)=>
              {
                console.log('submitLogin',response);
                if (response.authResponse)
                {
                  console.log('logged in');
                FB.api("/"+response.authResponse.userID+"/?fields=gender,email,name,id,picture",function (response) {
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
                 else
                 {
                 console.log('User login failed');
               }
    }, {scope: 'public_profile,email,user_gender,user_birthday'})


  }
}
