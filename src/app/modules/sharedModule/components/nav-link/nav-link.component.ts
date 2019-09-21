import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent implements OnInit {
  @Input()  link;
  @Input() activeStatus;
  @Output() onNavigationClicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.activeStatus);
  }
  onClicked () {
    this.onNavigationClicked.emit(this.link);
  }
}
