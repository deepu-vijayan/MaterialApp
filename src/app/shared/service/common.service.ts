import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  extractGoogleEmailContacts(data){
    return data.filter( (contact) => {
      if(contact.emailAddresses !=undefined)
        return contact;
    })
  }
}
