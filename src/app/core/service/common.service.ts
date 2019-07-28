import { Injectable } from '@angular/core';

import { DialogComponent } from '../../modules/sharedModule/components/dialog/dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private dialog: MatDialog) { }

  saveItem( key , data){
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  showAlertDialog(data){
    let dialogBox = this.dialog.open(DialogComponent, {
          //hasBackdrop: false,
          data
        });
    dialogBox.afterClosed().subscribe(result => {
      dialogBox.close();
    });
  }


}
