import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      let code = params.get("code");
      debugger;
      let redirect_uri = encodeURI("http://localhost:4200/register");
      let your_client_id = '81wq5skgqel8r1';
      let your_client_secret = 'ee6JvNW1kQqPkSfi'
      let httpHeaders = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      let options = {
        headers: httpHeaders
      };
      return this.httpClient.post(`https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${code}&redirect_uri=${redirect_uri}&client_id=${your_client_id}&client_secret=${your_client_secret}`, {}, options).subscribe(res => {
        console.log(res['access_token']);
        let accessToken = res['access_token'];
        let httpHeaders1 = new HttpHeaders({
          'Authorization': `Bearer ${accessToken}`
        });
        let options = {
          headers: httpHeaders1
        };
        this.httpClient.get('https://api.linkedin.com/v2/connections?q=viewer&start=0&count=50', options).subscribe(() => {

        });
      },
        err => {
          console.log(err);
        }
      );
    })
  }
}
