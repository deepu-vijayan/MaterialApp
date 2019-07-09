import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {
  @Input() cssClass: String;
  @Input() altText:String;
  @Input() iconSrc:String;
  @Input() label:String;
  @Output() onClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onButtonClick(e){
    this.onClick.emit(e)
  }

}
