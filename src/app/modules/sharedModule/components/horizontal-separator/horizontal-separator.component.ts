import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-separator',
  templateUrl: './horizontal-separator.component.html',
  styleUrls: ['./horizontal-separator.component.scss']
})
export class HorizontalSeparatorComponent implements OnInit {

  @Input() customeClassName;
  constructor() { }

  ngOnInit() {
    if(this.customeClassName == undefined || this.customeClassName == null){
      this.customeClassName = 'defaultClass';
    }
  }

}
