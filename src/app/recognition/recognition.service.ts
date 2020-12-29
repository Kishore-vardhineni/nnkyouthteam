import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecognitionService {

  constructor() { }

  recognitionData() {
    return new Observable(observer => {
      observer.next([
         {
           imgAndhrajyothi: 'assets/andrajyothi.png',
           imgEenadu: 'assets/eenadu.png',
           imgFtapcci: 'assets/ftapcci.png',
           imgHmtv: 'assets/HMTV.png',
           imgNasscom: 'assets/nasscom.jpg',
           imgTelanganaToday: 'assets/telanganatdy.png',
           imgThub: 'assets/thub.png',
           imgToi: 'assets/toi.jpg',
           mediaTitle: 'MEDIA',
           recognitionTitle: 'AWARDS & RECOGNITIONS',
         }
      ])
    })
 }
}
