import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings) :Observable<any> { 
   // return of(userSettings);
    //Dummy url generated with https://putsreq.com
    return this.http.post('https://putsreq.com/sL0AQy5hpZv1xuLjq8a9',userSettings);
  } 
}
