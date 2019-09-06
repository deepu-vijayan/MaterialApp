import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification-friend-request',
  templateUrl: './notification-friend-request.component.html',
  styleUrls: ['./notification-friend-request.component.scss']
})
export class NotificationFriendRequestComponent implements OnInit {

  @Input() userDetails;
  constructor() { }
  ngOnInit() {
  }

}
