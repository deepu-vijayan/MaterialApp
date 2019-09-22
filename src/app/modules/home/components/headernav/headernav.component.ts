import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/core/service/common.service';
import { ModalService } from 'src/app/_modal';
import { WebapiService } from 'src/app/core/http/webapi.service';
import { SearchUserModel } from '../../../../shared/models/model';
import { NgForm } from '@angular/forms';
import { debounceTime, switchMap, finalize, tap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-headernav',
  templateUrl: './headernav.component.html',
  styleUrls: ['./headernav.component.scss']
})
export class HeadernavComponent implements OnInit {
  left: string;
  top: string;

  constructor(private commonService:CommonService, private modalService: ModalService, private webapiService: WebapiService  ) { }
  profilePic:string ='';
  SearchField:string = '';
  userName:string = '';
  searchData ={}
  profiles = [];
  filteredProfiles= [];
  isLoading = false;
  @Output() onSearch = new EventEmitter();
  @ViewChild('form') ngForm: NgForm;
  ngOnInit() {
    let basicProfileInfo = this.commonService.getItem('userInfo');
    if(basicProfileInfo==undefined){
      basicProfileInfo = {email: "deepu.vijayan2007@gmail.com", name: "deepu vijayan", dateOfBirth: null, socialLoginUsed: 4, profilePic: "https://lh4.googleusercontent.com/-YKMeaES2Wpw/AAAAAAAAAAI/AAAAAAAAB9o/P897Yl5w7Zg/s96-c/photo.jpg"};
    }
    this.profilePic = basicProfileInfo.profilePic;
    this.userName = basicProfileInfo.name;
    this.ngForm.form.valueChanges
    //.filter(term => term != null)
    .pipe(
      debounceTime(500),
      tap(() => {
        this.filteredProfiles = [];
        this.isLoading = true;
      }),
      switchMap(value => this.webapiService.searchProfiles(value).pipe(
        finalize(() => {
          this.isLoading = false
        }),
        )
      )
    ).subscribe(x => {
      console.log(x);
      this.filteredProfiles = x;
    })
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.profiles.filter(profiles =>
      this._normalizeValue(profiles["name"]).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
  openPopOver(event,id : string,smallDevice:boolean){

    this.left  = event.clientX - 300  + "px";
    this.top  = event.clientY  + "px";
    this.openModal(id , smallDevice);
  }

  openModal(id: string,smallDevice:boolean=false) {
      this.modalService.open(id);
      this.commonService.PULL_NOTIFICATION.next(true);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }

  onSearchSubmit(){
    this.filteredProfiles =[];
    setTimeout(() => {
      this.filteredProfiles =[];
    }, 500);
    this.onSearch.emit({name: this.SearchField});
  }
  onSearchFilterChange(event){
    this.commonService.showLoading();
    this.searchData["name"] = event.target.value;
    this.webapiService.searchProfiles(this.searchData).subscribe(resp => {
      this.commonService.hideLoading();
      this.filteredProfiles = resp;
    },
    error=>{
      this.filteredProfiles = [];
      this.commonService.handleError(error);
      console.log(error);
    });
    //this.filteredProfiles =  this._filter(event.key);
  }
  onUserSelect(user){
    console.log(user);
    this.onSearch.emit({name: user});
  }

}
