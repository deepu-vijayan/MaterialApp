import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-connected-profiles',
  templateUrl: './connected-profiles.component.html',
  styleUrls: ['./connected-profiles.component.scss']
})
export class ConnectedProfilesComponent implements OnInit {

  constructor() { }
  @Input()  connections;
  SearchField = "";
  ngOnInit() {
    console.log(this.connections);
  }



}
