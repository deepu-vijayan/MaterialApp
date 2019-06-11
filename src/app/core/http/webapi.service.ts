import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WebapiService {

  constructor(private http: HttpClient) { }
  configUrl = './assets/config/settings.json';

  loadConfig() {
    return this.http.get(this.configUrl)
  }
}
