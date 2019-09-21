import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { WebapiService } from 'src/app/core/http/webapi.service';
import { CommonService } from '../../../../core/service/common.service';
@Component({
  selector: 'app-request-connection',
  templateUrl: './request-connection.component.html',
  styleUrls: ['./request-connection.component.scss']
})
export class RequestConnectionComponent implements OnInit {

  constructor(private webapiService: WebapiService,private commonService:CommonService, @Inject(MAT_DIALOG_DATA) public data) { }
  connectionCategory:any = [];
  selectedCategory:any;
  ngOnInit() {
    this.webapiService.getMasterData().subscribe(data =>{
      this.connectionCategory = data['MASTER_CONNECTION_TYPES'];
    })
  }
  cancelConnection(e){
    this.commonService.closePopUp();
  }
  connectUser(e){
    if(this.data.action =='request_connection'){
      let data = this.commonService.formatConnectionData(this.data)
      console.log(data);
      this.webapiService.connectUserApi(data).subscribe(resp => {
        console.log(resp);
      },
      error=>{
        this.commonService.handleError(error);
        console.log(error);
      })
    } else {
      console.log(this.data);
      let data = {
        appuserConnectionRequestId : this.data.id,
        masterConnectionTypesId: this.selectedCategory
      }
      this.webapiService.acceptConnectionRequest(data).subscribe(resp => {
        this.commonService.PULL_NOTIFICATION.next(true);
        console.log(resp);
      },
      error=>{
        this.commonService.handleError(error);
        console.log(error);
      })
    }
    this.commonService.closePopUp();
  }
}
