import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { DialogComponent } from '../../modules/sharedModule/components/dialog/dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public HAS_ERR_MSG = new BehaviorSubject<string>('');

  constructor(private dialog: MatDialog) { }

  saveItem( key , data){
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  showAlertDialog(data){
    console.log('here')
    let dialogBox = this.dialog.open(DialogComponent, {
          //hasBackdrop: false,
          data: data
        });
    dialogBox.afterClosed().subscribe(result => {
      console.log(result);
      dialogBox.close();
    });
  }


}
