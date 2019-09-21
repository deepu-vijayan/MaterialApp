import { Component, OnInit, Inject, Injectable, NgZone } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  title: string;
  okButton: string;
  cancelButton: string;
  message: string;
  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data : any, private ngZone: NgZone) { }
  ngOnInit(){
    this.title = this.data.title ? this.data.title : 'Error';
    this.okButton = this.data.okButton ? this.data.okButton : 'Ok';
    this.cancelButton = this.data.cancelButton ? this.data.cancelButton : 'Cancel';
    this.message = this.data.message ? this.data.message : '';
  }
  onOkClick(){
    this.ngZone.run(() => {
      this.dialogRef.close('OK');
    });
  }
  onCancelClick(){
    this.ngZone.run(() => {
      this.dialogRef.close('Cancel');
    });
  }


}
