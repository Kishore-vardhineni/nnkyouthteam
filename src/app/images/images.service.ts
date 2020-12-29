import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  public imagesData() {
    return new Observable(observer => {
      observer.next([
        {
          imgEenaduAdvertisament: 'assets/eenaduadvertisament.jpg',
          imgTeamTarak: 'assets/teamtarak.jpg',
          imgTeamTarak1: 'assets/teamtarak1.jpg',
          imgTeamTarak2: 'assets/teamtarak2.jpg',
          imgTeamTarak3: 'assets/teamtarak3.jpg',
          imgTeamTarak4: 'assets/teamtarak4.jpg',
          imgTeamTarak5: 'assets/teamtarak5.jpg',
          imgTeamTarak6: 'assets/teamtarak6.jpg',
          imgTeamTarak7: 'assets/teamtarak7.jpg',
          imgTeamTarak8: 'assets/teamtarak8.jpg',
          imgTeamTarak9: 'assets/tematarak9.jpg',
          imgNnkpost: 'assets/nnkpost.jpg',
          imgNnkpost1: 'assets/nnkpost1.jpg',
          imgNtrBirthday: 'assets/ntrbirthday.jpg',
          imgTitle: 'Images'
        }
      ])
    })
  }
}
