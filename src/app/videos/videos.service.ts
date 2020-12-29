import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor() { }

  videosData() {
    return new Observable(observer => {
      observer.next([
        {
          videoTitle: 'Videos',
          videoJalapalem: 'assets/videos/Jalapalem.mp4',
          videoTeamtarak: 'assets/videos/teamtarakvideo.mp4',
          videoIntroductionToAngular2: 'assets/videos/Introduction to Angular 2.mp4',
          videoMov_bbb: 'assets/videos/mov_bbb.mp4'
        }
      ])
    })
  }
}

