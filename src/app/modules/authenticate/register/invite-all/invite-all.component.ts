import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../core/service/common.service';

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-invite-all',
  templateUrl: './invite-all.component.html',
  styleUrls: ['./invite-all.component.scss']
})
export class InviteAllComponent implements OnInit {
  private connectionList : any;

  constructor(private commonService:CommonService, private router: Router) { }

  ngOnInit() {
    this.connectionList = this.commonService.getConnectionList();
  }

  selectedInvite(){
    this.router.navigate(['../authenticate/invite/select'])
  }

}
