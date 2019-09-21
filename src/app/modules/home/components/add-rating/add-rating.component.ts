import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { CommonService } from 'src/app/core/service/common.service';
import { WebapiService } from 'src/app/core/http/webapi.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-rating',
  templateUrl: './add-rating.component.html',
  styleUrls: ['./add-rating.component.scss']
})
export class AddRatingComponent implements OnInit {

  constructor(private commonService: CommonService, private webapiService: WebapiService, @Inject(MAT_DIALOG_DATA) public data, private snackBar: MatSnackBar) { }
  visitorProfileDetails:any;
  ratingAttribute:any =[];
  attributeData:any =[];
  totalRating:number = 0;
  averageRating:number = 0;
  numberOfAttributeRated:number = 0;
  public snackBarDuration: number = 2000;
  ngOnInit() {
    this.visitorProfileDetails = this.data.visitProfile;
    //this.commonService.showLoading();
    this.webapiService.getMasterData().subscribe(data =>{
      //this.commonService.hideLoading();
      this.attributeData = data['MASTER_RATING_ATTRIBUTES'];
    },
    error  => {
      //this.commonService.hideLoading();
      let errorMessage = 'Please try again'
      this.commonService.HAS_ERR_MSG.next(errorMessage);
    })
  }
  closePopup(){
    this.commonService.closePopUp();
  }
  getAttributeRating(e){
    console.log(e);
    let parent = this;
    this.totalRating = 0;
    let filteredAttributeList = e.filter(function (el) {
      if( el!=null ){
        parent.totalRating += el.rating;
      }
      return el != null;
    });
    this.numberOfAttributeRated = filteredAttributeList.length;
    this.averageRating = (this.totalRating / this.numberOfAttributeRated);
    console.log('numberOfAttributeRated', this.numberOfAttributeRated)
  }
  saveRating(){
    if(this.numberOfAttributeRated !=  this.attributeData.length){
      this.commonService.HAS_ERR_MSG.next('Please rate all attribute');
    }
    else{
      console.log('api call');
      this.closePopup();
      this.snackBar.open('You rating saved', '', { duration: this.snackBarDuration});
    }
  }

}
