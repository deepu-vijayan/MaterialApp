import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-connected-profiles',
  templateUrl: './connected-profiles.component.html',
  styleUrls: ['./connected-profiles.component.scss']
})
export class ConnectedProfilesComponent implements OnInit {

  constructor() { }
  @Input()  title;
  SearchField = "";
  CONNECTION_LIST=[]
  ngOnInit() {
    this.setConnectionList()
  }

  setConnectionList(){
  this.CONNECTION_LIST=[
    {
      name : 'Vishnu',
      title : 'Friends',
      designation : 'Developer @ XYZ company',
      profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
    },
    {
      name : 'Vishnu',
      title : 'Friends',
      designation : 'Developer @ XYZ company',
      profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
    },
    {
      name : 'Vishnu',
      title : 'Friends',
      designation : 'Developer @ XYZ company',
      profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
    },
    {
      name : 'Vishnu',
      title : 'Friends',
      designation : 'Developer @ XYZ company',
      profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
    },
    {
      name : 'Vishnu',
      title : 'Friends',
      designation : 'Developer @ XYZ company',
      profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
    },
    {
      name : 'Vishnu',
      title : 'Friends',
      designation : 'Developer @ XYZ company',
      profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
    },
    {
      name : 'Vishnu',
      title : 'Friends',
      designation : 'Developer @ XYZ company',
      profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
    },
    {
      name : 'Vishnu',
      title : 'Friends',
      designation : 'Developer @ XYZ company',
      profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
    },
    {
      name : 'Vishnu',
      title : 'Friends',
      designation : 'Developer @ XYZ company',
      profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
    },
    {
      name : 'Vishnu',
      title : 'Friends',
      designation : 'Developer @ XYZ company',
      profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
    },
    {
      name : 'Vishnu',
      title : 'Friends',
      designation : 'Developer @ XYZ company',
      profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
    },
    {
      name : 'Vishnu',
      title : 'Friends',
      designation : 'Developer @ XYZ company',
      profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
    },
    {
      name : 'Vishnu',
      title : 'Friends',
      designation : 'Developer @ XYZ company',
      profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
    },
    {
      name : 'Vishnu',
      title : 'Friends',
      designation : 'Developer @ XYZ company',
      profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
    },
    {
      name : 'Vishnu',
      title : 'Friends',
      designation : 'Developer @ XYZ company',
      profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
    },
    {
      name : 'Vishnu',
      title : 'Friends',
      designation : 'Developer @ XYZ company',
      profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
    },
    {
      name : 'Vishnu',
      title : 'Friends',
      designation : 'Developer @ XYZ company',
      profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
    },
    {
      name : 'Vishnu',
      title : 'Friends',
      designation : 'Developer @ XYZ company',
      profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
    },
    {
      name : 'Vishnu',
      title : 'Friends',
      designation : 'Developer @ XYZ company',
      profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
    },
    {
      name : 'Vishnu',
      title : 'Friends',
      designation : 'Developer @ XYZ company',
      profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
    },
    {
      name : 'Vishnu',
      title : 'Friends',
      designation : 'Developer @ XYZ company',
      profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
    },
  ]
  }

}
