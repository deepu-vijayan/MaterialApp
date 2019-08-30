import { Component, OnInit, Input } from '@angular/core';
import { CLASS_NAME } from '@angular/flex-layout';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() customeClassName;
  applyClass:String ='defaultClass';
  constructor() { }

  ngOnInit() {
    if(this.customeClassName !=undefined || this.customeClassName != null){
      this.applyClass = this.customeClassName;
    }
  }

}
