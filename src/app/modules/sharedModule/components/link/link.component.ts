import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  @Input()  link;
  @Output() onNavigationClicked = new EventEmitter();
  constructor() { }
 
  ngOnInit() {
  }
  onClicked () {
    this.onNavigationClicked.emit(this.link);
  }

}
