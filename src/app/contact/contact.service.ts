// Injectable
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  public contactData() {
    return new Observable(observer => {
      observer.next([
        {
          address: 'Float No.3, N.N.Kandrika Village, Jarugumalli Mandalam, Prakasam District, Andhra Pradesh - 523271.',
          contact: 'Contact',
          contactUs: 'Contact Us',
          email: 'kishore.vardhineni01@gmail.com',
          mailUs: 'Mail Us',
          phone: '+91 9010052295',
          visitUs: 'Visit Us',
        }
      ]);
    });
  }
  
}
