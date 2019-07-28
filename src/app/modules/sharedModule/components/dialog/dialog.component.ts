import { Component, OnInit, Inject, Injectable } from '@angular/core';
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
  constructor(private dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data : any) { }
  ngOnInit(){
    this.title = this.data.title ? this.data.title : 'Error';
    this.okButton = this.data.okButton ? this.data.okButton : 'Ok';
    this.cancelButton = this.data.cancelButton ? this.data.cancelButton : 'Cancel';
    this.message = this.data.message ? this.data.message : '';
  }
  closeDialog(){
    this.dialogRef.close();
  }

}
