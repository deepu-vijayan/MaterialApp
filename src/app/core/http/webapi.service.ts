import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../service/common.service';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebapiService {

  constructor(private http: HttpClient, private commonService: CommonService) { }
  configUrl = './assets/config/settings.json';

  loadConfig() {
    return this.http.get(this.configUrl)
  }
  getBaseUrl(){
    let appSetting = this.commonService.getItem('setting');
    return appSetting[appSetting.env]
  }
  registerApi(data){
   let url = this.getBaseUrl() + 'register';
   return this.http.post(url,data)
  }
  connectUserApi(data){
    let url = this.getBaseUrl() + 'connectUser';
    return this.http.post(url,data)
   }

}
