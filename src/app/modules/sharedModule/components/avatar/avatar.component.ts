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
  @Input() imgSize:any;
  dynamicDirective:String = 'mat-card-image';
  size:any;
  ngOnInit() {
    if(this.imgSize ==undefined || this.imgSize ==null){
      this.size = '40';
    } else{
      this.size = this.imgSize;
    }
  }

}
