import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  saveItem( key , data){
    sessionStorage.setItem(key, JSON.stringify(data));
  }


}
