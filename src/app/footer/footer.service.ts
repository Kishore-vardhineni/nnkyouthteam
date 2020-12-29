import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor() { }

  public footerData() {
    return new Observable(observer => {
      observer.next([
        {
          address: ' H.No.3, N.N.Kandrika village(post), Near ramalayam temple road, Zarugumalli Mandal, Prakasam District, Andhra Pradesh-523271.',
          countryCode: +91,
          copyRights: '@ 2020 copyright: N.N.Kandrika Youth',
          email: 'kishore.vardhineni01@gmail.com',
          footerText: 'N.N.Kandrika',
          mobileNumber: 9010052295,
        }
      ])
    })
 }
}
