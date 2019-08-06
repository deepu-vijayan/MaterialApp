import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { DialogComponent } from '../../modules/sharedModule/components/dialog/dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public HAS_ERR_MSG = new BehaviorSubject<string>('');
  public basicProfileInfo :any;
  public connectionList: any[];

  constructor(private dialog: MatDialog) { }

  saveItem( key , data){
    sessionStorage.setItem(key, JSON.stringify(data));
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


}
