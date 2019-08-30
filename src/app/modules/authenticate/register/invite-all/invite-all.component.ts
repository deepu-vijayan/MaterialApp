import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../core/service/common.service';
import { WebapiService } from '../../../../core/http/webapi.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-invite-all',
  templateUrl: './invite-all.component.html',
  styleUrls: ['./invite-all.component.scss']
})
export class InviteAllComponent implements OnInit {
  public connectionList : any;

  constructor(private commonService: CommonService, private router: Router, private webapiService: WebapiService) { }

  ngOnInit() {
    this.connectionList = this.commonService.getConnectionList();
  }

  selectedInvite(){
    this.router.navigate(['../authenticate/invite/select'])
  }
  inviteAll(){
    let connectionListData = this.commonService.getConnectionList();
    this.webapiService.connectUserApi(connectionListData).subscribe(
      data  => {

        console.log("POST connectUserApi Request is successful ", data);
        this.router.navigate(['../authenticate/invite/complete']);

      },
      error  => {
        let errorMessage = 'Please try again'
        this.commonService.HAS_ERR_MSG.next(errorMessage);
      });
  }

}
