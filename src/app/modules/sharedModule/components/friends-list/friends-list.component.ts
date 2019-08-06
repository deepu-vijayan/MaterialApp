import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {

  @Input() friendsList:any[];
  @Input() searchBy:string;
  public config: PerfectScrollbarConfigInterface = {};
  @ViewChild(PerfectScrollbarComponent, {}) componentRef?: PerfectScrollbarComponent;
  constructor() { }

  ngOnInit() {
    console.log(this.searchBy);
  }

}
