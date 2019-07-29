import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../core/service/common.service';
@Component({
  selector: 'app-invite-all',
  templateUrl: './invite-all.component.html',
  styleUrls: ['./invite-all.component.scss']
})
export class InviteAllComponent implements OnInit {
  private connectionList : any;

  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.connectionList = this.commonService.getConnectionList();
  }

}
