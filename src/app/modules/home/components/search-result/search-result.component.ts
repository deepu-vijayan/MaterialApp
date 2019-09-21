import { Component, OnInit, Input, Inject } from '@angular/core';
import { CommonService } from '../../../../core/service/common.service';
import { WebapiService } from '../../../../core/http/webapi.service';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  public searchResults =[];
  public searchTitle;
  constructor(private commonService:CommonService, private webapiService: WebapiService) { }


  ngOnInit() {
    this.searchTitle = this.commonService.SEARCH_CRITERIA.subscribe(data =>{
      this.commonService.showLoading();
      this.webapiService.searchProfiles(data).subscribe(resp => {
        this.commonService.hideLoading();
        if(resp)
          this.searchResults = resp;

      },
      error=>{
        this.commonService.hideLoading();
        this.searchResults = [];
        this.commonService.handleError(error);
        console.log(error);
      });
    });

    //this.filteredProfiles =  this._filter(event.key);
  }
  viewProfile(profileDetails){
    this.commonService.viewConnectionProfile(profileDetails);
  }
  //   this.searchResults =[
  //     {
  //       name : 'vishnu',
  //       title : 'Friends',
  //       designation : 'Developer @ XYZ company',
  //       profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
  //     },
  //     {
  //       name : 'deepu',
  //       title : 'Friends',
  //       designation : 'Developer @ XYZ company',
  //       profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
  //     },
  //     {
  //       name : 'jacob',
  //       title : 'Friends',
  //       designation : 'Developer @ XYZ company',
  //       profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"
  //     }
  //   ];
  // }

}
