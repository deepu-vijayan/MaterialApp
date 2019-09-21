import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }
  searchObj:any;
  ngOnInit() {
  }
  searchUser(searchdetails){
    this.searchObj = searchdetails;
  }
}
