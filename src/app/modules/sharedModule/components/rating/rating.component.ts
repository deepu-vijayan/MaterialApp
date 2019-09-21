
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { CommonService } from '../../../../core/service/common.service'

@Component({
  selector: 'mat-star-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class RatingComponent implements OnInit {

  @Input('rating') public rating: number = 3;
  public starCount: number = 5;
  @Input('color') public color: string = 'accent';
  @Input() mode:string = 'view';
  @Output() public ratingUpdated = new EventEmitter();

  public snackBarDuration: number = 2000;
  public ratingArr = [];

  constructor(private snackBar: MatSnackBar, private commonService: CommonService) {
  }


  ngOnInit() {
    this.starCount = this.commonService.getMaxRating();
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }
  onClick(rating:number) {
    this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
      duration: this.snackBarDuration
    });
    this.ratingUpdated.emit(rating);
    return false;
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
