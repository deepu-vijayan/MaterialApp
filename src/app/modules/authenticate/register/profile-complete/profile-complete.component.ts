import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile-complete',
  templateUrl: './profile-complete.component.html',
  styleUrls: ['./profile-complete.component.scss']
})
export class ProfileCompleteComponent implements OnInit {

  public profileId:string;
  constructor() { }

  ngOnInit() {
    this.profileId = "334456677"
  }

}
