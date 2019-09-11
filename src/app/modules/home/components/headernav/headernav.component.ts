import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/service/common.service';
import { ModalService } from 'src/app/_modal';
import { Observable } from 'rxjs';
import { WebapiService } from 'src/app/core/http/webapi.service';

@Component({
  selector: 'app-headernav',
  templateUrl: './headernav.component.html',
  styleUrls: ['./headernav.component.scss']
})
export class HeadernavComponent implements OnInit {

  constructor(private commonService:CommonService, private modalService: ModalService,private webapiService: WebapiService ) { }

  profiles = [];
  filteredProfiles: string[];
  profilePic:string ='';
  SearchField:string = '';
  userName:string = '';
  ngOnInit() {
    let basicProfileInfo = this.commonService.getBasicProfileInfo();
    if(basicProfileInfo==undefined){
      basicProfileInfo = {email: "deepu.vijayan2007@gmail.com", name: "deepu vijayan", dateOfBirth: null, socialLoginUsed: 4, profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"};
    }
    this.profilePic = basicProfileInfo.profilePic;
    this.userName = basicProfileInfo.name;
    this.commonService.showLoading();
    this.webapiService.searchProfiles().subscribe(resp => {
      this.commonService.hideLoading();
      console.log(resp);
      this.profiles=resp["O/P"];
    });
    //this.onSearchFilterChange();
  }
  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.profiles.filter(profiles => 
      this._normalizeValue(profiles["name"]).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  openModal(id: string) {
      this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }
  onSearchFilterChange(event){
    console.log(event.key)
    this.filteredProfiles =  this._filter(event.key);
  }
}
