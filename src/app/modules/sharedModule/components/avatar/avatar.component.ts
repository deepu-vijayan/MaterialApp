import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  constructor() { }
  @Input() imgSrc:String;
  @Input() imgName:String;
  ngOnInit() {
  }

}
