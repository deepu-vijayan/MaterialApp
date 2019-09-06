import { Component, OnInit, ViewChild } from '@angular/core';
import { PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
@Component({
  selector: 'app-notification-popup',
  templateUrl: './notification-popup.component.html',
  styleUrls: ['./notification-popup.component.scss']
})
export class NotificationPopupComponent implements OnInit {

  constructor() { }
  private friendRequestList;
  public config: PerfectScrollbarConfigInterface = {};
  @ViewChild(PerfectScrollbarComponent, {}) componentRef?: PerfectScrollbarComponent;
  ngOnInit() {
    this.friendRequestList = [
      {
        email: "deepu.vijayan2007@gmail.com",
        name: "deepu vijayan",
        dateOfBirth: null,
        socialLoginUsed: 4,
        profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg",
        mutualFriends: 3
      },
      {
        email: "deepu.vijayan2007@gmail.com",
        name: "deepu vijayan",
        dateOfBirth: null,
        socialLoginUsed: 4,
        profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg",
        mutualFriends: 2
      }
    ]
  }

}
