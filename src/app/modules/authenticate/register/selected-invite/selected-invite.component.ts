import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-invite',
  templateUrl: './selected-invite.component.html',
  styleUrls: ['./selected-invite.component.scss']
})
export class SelectedInviteComponent implements OnInit {

  constructor() { }

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  ngOnInit() {
  }

}
