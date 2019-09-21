import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections-page.component.scss']
})
export class ConnectionsPageComponent implements OnInit {

  constructor() { }

  index: number;
  connectionCategories=[];
  selectedItem = {};
  selectedIndex = 0;
  connections = [];
  //navLinksDesktop: { title: string; comp  icon: string; }[];
  ngOnInit() {
    this.connectionCategories = [
      {
        title: 'All',
        count: '4,893',
        connectionList: [
          {
            name : 'vishnu',
            title : 'Friends',
            designation : 'Developer @ XYZ company',
            profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
          },
          {
            name : 'deepu',
            title : 'Friends',
            designation : 'Developer @ XYZ company',
            profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
          },
          {
            name : 'jacob',
            title : 'Friends',
            designation : 'Developer @ XYZ company',
            profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
          }
        ]
      },
      {
        title: 'Friends',
        //component: ConnectedProfilesComponent,
        count: '2,431',
        connectionList: [
          {
            name : 'vishnu',
            title : 'Friends',
            designation : 'Developer @ XYZ company',
            profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
          }
        ]
      },
      {
        title: 'Family',
        //component: ConnectedProfilesComponent,
        count: '831',
        connectionList: [
          {
            name : 'deepu',
            title : 'Friends',
            designation : 'Developer @ XYZ company',
            profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
          }
        ]
      },
      {
        title: 'Seniors',
        //component: ConnectedProfilesComponent,
        count: '1,501',
        connectionList: [
          {
            name : 'jacob',
            title : 'Seniors',
            designation : 'Developer @ XYZ company',
            profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
          }
        ]
      },
      {
        title: 'Juniors',
        count: '689',
        connectionList: []
      }];
      this.selectedItem = this.connectionCategories[0];
      this.connections = this.connectionCategories[0].connectionList;
  }

  navItemClicked(item) {
    this.selectedItem = item;
    this.connections = item.connectionList;
    //this.selectedIndex = link.selectedIndex;
  }

}
