import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  @Input()  link;
  @Input() arrayIndex;
  @Input() selectedItem;
  @Output() onNavigationClicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onClicked () {
    console.log(this.selectedItem);
    //this.link.selectedIndex = this.arrayIndex;
    this.onNavigationClicked.emit(this.link);
  }
}
