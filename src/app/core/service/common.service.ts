import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { DialogComponent } from '../../modules/sharedModule/components/dialog/dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginModel } from 'src/app/shared/models/model';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public HAS_ERR_MSG = new BehaviorSubject<string>('');
  public SHOW_LOADING = new BehaviorSubject<string>('');
  public CURRENT_PAGE = new BehaviorSubject<string>('');
  public SEARCH_CRITERIA = new BehaviorSubject<string>('');
  public VIEW_PROFILE = new BehaviorSubject<any>({});
  public PULL_NOTIFICATION = new BehaviorSubject<boolean>(false);
  public basicProfileInfo :any;
  public connectionList: any[];
  public connectionDetailList: any[];
  public searchTitle = '';
  public popupObj;

  constructor(private dialog: MatDialog, private ngZone: NgZone) { }

  saveItem( key , data){
    sessionStorage.setItem(key, JSON.stringify(data));
  }
  getItem(key){
    return JSON.parse(sessionStorage.getItem(key));
  }
  showAlertDialog(data){
    const dialogBox = this.dialog.open(DialogComponent, {
          //hasBackdrop: false,
          data: data
        });
    dialogBox.afterClosed().subscribe(result => {
      console.log(result);
      //dialogBox.close();
    });
  }
  setBasicProfileInfo(data){
    this.saveItem('userInfo', data);
    this.basicProfileInfo = data;
  }
  getBasicProfileInfo(){
    return this.basicProfileInfo;
  }
  setConnectionList(data){
    this.connectionList = data;
  }
  getConnectionList(){
    return this.connectionList;
  }
  setConnectionDetailList(data){
    this.connectionDetailList = data;
  }
  getConnectionDetailList(){
    return this.connectionDetailList;
  }
  showLoading(msg="Please wait..."){
    this.SHOW_LOADING.next(msg);
  }
  hideLoading(){
    this.SHOW_LOADING.next('');
  }

  getCurrentDate(){
    let date = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return date.getFullYear()+"-"+months[date.getMonth()]+"-"+date.getDate();
  }

  handleError(error){
    this.hideLoading();
    this.HAS_ERR_MSG.next('Please try after sometime.')
  }

  setSearchCriteria(data){
    this.SEARCH_CRITERIA.next(data);
  }

  viewConnectionProfile(data){
    this.VIEW_PROFILE.next(data);
  }
  isEmpty(obj) {
      for(var key in obj) {
        if(obj.hasOwnProperty(key))
          return false;
      }
      return true;
  }

  openPopUp(popupComponent, data={}){
    this.popupObj = this.dialog.open(popupComponent, data);
    this.popupObj.afterClosed().subscribe(result => {
      console.log(result);
      //dialogBox.close();
    });
  }

  closePopUp(){
    this.ngZone.run(() => {
      this.popupObj.close('Cancel');
    });
  }

  formatConnectionData(inputData){
    let returnData = [
      {
        fromAppUserId: {id : inputData.loginProfile.appUserId},
        toAppUserId: {id: inputData.visitProfile.appUserDetails.appUser},
        notifyType: 1,
        toEmailId: inputData.visitProfile.email
      }
    ]
    return returnData;
  }
  getMaxRating(){
    let appSetting = this.getItem('setting');
    return appSetting['maxRating'];
  }


}
