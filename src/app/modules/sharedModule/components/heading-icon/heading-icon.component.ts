import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heading-icon',
  templateUrl: './heading-icon.component.html',
  styleUrls: ['./heading-icon.component.scss']
})
export class HeadingIconComponent implements OnInit {

  @Input() materialIcon;
  constructor() { }

  ngOnInit() {
  }

}
