import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../../../../core/service/common.service';
import { WebapiService } from '../../../../core/http/webapi.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-selected-invite',
  templateUrl: './selected-invite.component.html',
  styleUrls: ['./selected-invite.component.scss']
})
export class SelectedInviteComponent implements OnInit {

  constructor(private commonService:CommonService, private router: Router, private webapiService: WebapiService) { }

  public connectionList: any[];
  public selectedContacts :any[]=[];
  SearchField:string ='';
  public profileDetails;


  ngOnInit() {
    this.profileDetails = this.commonService.getBasicProfileInfo();
    this.connectionList = this.commonService.getConnectionDetailList();
    if(this.connectionList == undefined){
        this.connectionList = [{
          "fromAppuserId": "0",
          "name": "jInEsH chandy",
          "profilePic": "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/V8BNOaftJmYmUzL2mszyA4jceZSm5fWWwCLcDEAEiGQoBahD___________8BGMDX8fr______wE/s100/photo.jpg",
          "toEmail": "jineshchandi@yahoo.com"
        },
        {
          "fromAppuserId": 0,
          "name": "NIDHIN.R.DANIEL 9947096960",
          "profilePic": "https://lh5.googleusercontent.com/-YfoJifsHKQc/AAAAAAAAAAI/AAAAAAAAAAA/McuPamOmuXk/s100/photo.jpg",
          "toEmail": "nidhinrdaniel@gmail.com"
        },
        {
          "fromAppuserId": 0,
          "name": "basil.a.m ......",
          "profilePic": "https://lh3.googleusercontent.com/-RzC5b3HdOq8/AAAAAAAAAAI/AAAAAAAACOk/liUX5A3fcME/s100/photo.jpg",
          "toEmail": "basil.a.m@gmail.com"
        },
        {
          "fromAppuserId": 0,
          "name": "Denny Thomas(8907734005)",
          "profilePic": "https://lh3.googleusercontent.com/-cN0TI9Y07JE/AAAAAAAAAAI/AAAAAAAAAHY/ISRDr4RFjU8/s100/photo.jpg",
          "toEmail": "dennythomas555@gmail.com"
        },
        {
          "fromAppuserId": 0,
          "name": "Shiju Shaji",
          "profilePic": "https://lh6.googleusercontent.com/-dQya_jiEnG4/AAAAAAAAAAI/AAAAAAAAADI/sj4jAnx0S_0/s100/photo.jpg",
          "toEmail": "sheanzx@gmail.com"
        },
        {
          "fromAppuserId": 0,
          "name": "ajas pareeth",
          "profilePic": "https://lh3.googleusercontent.com/-2YanfuRc7H4/AAAAAAAAAAI/AAAAAAAAAaM/LmTomy7nr1c/s100/photo.jpg",
          "toEmail": "ajas09@gmail.com"
        },
        {
          "fromAppuserId": "0",
          "name": "jInEsH chandy",
          "profilePic": "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/V8BNOaftJmYmUzL2mszyA4jceZSm5fWWwCLcDEAEiGQoBahD___________8BGMDX8fr______wE/s100/photo.jpg",
          "toEmail": "jineshchandi@yahoo.com"
        },
        {
          "fromAppuserId": 0,
          "name": "NIDHIN.R.DANIEL 9947096960",
          "profilePic": "https://lh5.googleusercontent.com/-YfoJifsHKQc/AAAAAAAAAAI/AAAAAAAAAAA/McuPamOmuXk/s100/photo.jpg",
          "toEmail": "nidhinrdaniel@gmail.com"
        },
        {
          "fromAppuserId": 0,
          "name": "basil.a.m ......",
          "profilePic": "https://lh3.googleusercontent.com/-RzC5b3HdOq8/AAAAAAAAAAI/AAAAAAAACOk/liUX5A3fcME/s100/photo.jpg",
          "toEmail": "basil.a.m@gmail.com"
        },
        {
          "fromAppuserId": 0,
          "name": "Denny Thomas(8907734005)",
          "profilePic": "https://lh3.googleusercontent.com/-cN0TI9Y07JE/AAAAAAAAAAI/AAAAAAAAAHY/ISRDr4RFjU8/s100/photo.jpg",
          "toEmail": "dennythomas555@gmail.com"
        },
        {
          "fromAppuserId": 0,
          "name": "Shiju Shaji",
          "profilePic": "https://lh6.googleusercontent.com/-dQya_jiEnG4/AAAAAAAAAAI/AAAAAAAAADI/sj4jAnx0S_0/s100/photo.jpg",
          "toEmail": "sheanzx@gmail.com"
        },
        {
          "fromAppuserId": 0,
          "name": "ajas pareeth",
          "profilePic": "https://lh3.googleusercontent.com/-2YanfuRc7H4/AAAAAAAAAAI/AAAAAAAAAaM/LmTomy7nr1c/s100/photo.jpg",
          "toEmail": "ajas09@gmail.com"
        }
      ];
    }
  }
  selectedItems(data){
    this.selectedContacts = [];
    data.filter( (contact) => {
      if(contact.fromAppuserId !=undefined && contact.toEmail !=undefined){console.log(contact);
        this.selectedContacts.push({
          fromAppuserId: contact.fromAppuserId,
          toEmail: contact.toEmail
        });
      }
    });
  }
  sendInvite(){
    //this.commonService.getConnectionList();
    this.webapiService.connectUserApi(this.selectedContacts).subscribe(
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
