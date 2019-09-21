import { Component, OnInit, Input } from '@angular/core';
import { StarRatingColor } from 'src/app/modules/sharedModule/components/rating/rating.component';
import { ModalService } from 'src/app/_modal';

@Component({
  selector: 'app-rating-factors',
  templateUrl: './rating-factors.component.html',
  styleUrls: ['./rating-factors.component.scss']
})

export class RatingFactorsComponent implements OnInit {
@Input() ratingFactors = [];
  top: string;
  left: string;
  constructor(private modalService: ModalService) { }
  starCount: number = 10;
  starColor: StarRatingColor = StarRatingColor.accent;
  starColorP: StarRatingColor = StarRatingColor.primary;
  starColorW: StarRatingColor = StarRatingColor.warn;
  ngOnInit() {
    console.log(this.ratingFactors)
  }

  openPopOver(event,id : string,smallDevice:boolean){

    this.left  = event.clientX - 100  + "px";
    this.top  = event.clientY  + "px";
    this.openModal(id , smallDevice);
  }
  openModal(id: string,smallDevice:boolean=false) {
    this.modalService.open(id,smallDevice);
}

closeModal(id: string) {
    this.modalService.close(id);
}
}
