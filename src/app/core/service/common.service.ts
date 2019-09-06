import { Injectable } from '@angular/core';
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
  public basicProfileInfo :any;
  public connectionList: any[];
  public connectionDetailList: any[];

  constructor(private dialog: MatDialog) { }

  saveItem( key , data){
    sessionStorage.setItem(key, JSON.stringify(data));
  }
  getItem(key){
    return JSON.parse(sessionStorage.getItem(key));
  }
  showAlertDialog(data){
    let dialogBox = this.dialog.open(DialogComponent, {
          //hasBackdrop: false,
          data: data
        });
    dialogBox.afterClosed().subscribe(result => {
      console.log(result);
      dialogBox.close();
    });
  }
  setBasicProfileInfo(data){
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


}
