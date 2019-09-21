import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StarRatingColor } from '../../../sharedModule/components/rating/rating.component';

import { WebapiService } from 'src/app/core/http/webapi.service';
import { CommonService } from 'src/app/core/service/common.service';
@Component({
  selector: 'app-rating-attribute',
  templateUrl: './rating-attribute.component.html',
  styleUrls: ['./rating-attribute.component.scss']
})
export class RatingAttributeComponent implements OnInit {

  @Input() attributeData:any;
  @Output() public onSaveAttributeRating = new EventEmitter();
  starColor:StarRatingColor = StarRatingColor.accent;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.warn;
  rating:number = 0;
  rattedData:any=[];
  constructor(private webapiService: WebapiService, private commonService: CommonService) { }

  ngOnInit() {

  }
  onRatingChanged(rating, attribute){
    console.log(rating,attribute);
    //this.rating = rating;
    attribute['rating'] = rating;
    this.rattedData[attribute.id] = attribute;
    this.onSaveAttributeRating.emit(this.rattedData);
  }

}
