import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() onSelectedFromList = new EventEmitter();
  selectedOptions=[];
  selectedOption;
  public config: PerfectScrollbarConfigInterface = {};
  @ViewChild(PerfectScrollbarComponent, {}) componentRef?: PerfectScrollbarComponent;
  constructor() { }

  ngOnInit() {
    console.log(this.searchBy);
  }

  onNgModelChange($event){
    console.log('from child '+$event);
    this.onSelectedFromList.emit($event);

  }

}
