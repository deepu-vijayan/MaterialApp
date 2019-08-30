import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from '../../../../core/service/common.service';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

  constructor(private commonService: CommonService) { }
  show:boolean = false;
  message:string = '';
  ngOnInit() {

    this.commonService.SHOW_LOADING.subscribe(val => {
      if (val !== '') {
        this.show = true;
        this.message = val;
      }
      else{
        this.show = false;
      }
    });
  }
  ngOnDestroy(){
    this.commonService.SHOW_LOADING.unsubscribe();
  }

}
