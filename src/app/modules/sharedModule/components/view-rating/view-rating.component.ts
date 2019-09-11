import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-readonly-star-rating',
  templateUrl: './view-rating.component.html',
  styleUrls: ['./view-rating.component.scss']
})
export class ViewRatingComponent implements OnInit {

  @Input('rating') public rating: number = 3;
  @Input('starCount') public starCount: number = 5;
  @Input('color') public color: string = 'accent';
  @Input('textRequired') public textRequired : string ="true";
  @Output() public ratingUpdated = new EventEmitter();

  public snackBarDuration: number = 2000;
  public ratingArr = [];
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log("a "+this.textRequired)
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }
  showIcon(index:number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}
export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn"
}