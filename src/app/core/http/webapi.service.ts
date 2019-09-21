import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../service/common.service';
import { Observable , of } from 'rxjs';
import { SearchUserModel } from '../../../app/shared/models/model';
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
  searchProfiles(data): Observable<SearchUserModel[]>{
    if(data.name !=""){
    let url = this.getBaseUrl() + 'searchProfiles';
    return this.http.post<SearchUserModel[]>(url,data)
  }
  else{
    return of([])
  }
  }
  getUserInfo(data){
    let url = this.getBaseUrl() + 'getProfileDetails';
    return this.http.post(url,data)
  }
  getMasterData(data = []){
    let url = this.getBaseUrl() + 'getMasterData';
    return this.http.post(url,data)
  }
  getAllConnectionRequests(data){
    let url = this.getBaseUrl() + 'getAllConnectionRequests';
    return this.http.post(url,data)
  }

  acceptConnectionRequest(data){
    let url = this.getBaseUrl() + 'acceptConnectionRequest';
    return this.http.post(url,data)
  }


}
