import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  teamData() {
    return new Observable(observer => {
      observer.next([
        {
          imgTeamTitle: 'Team Work',
          imgTeamWork1: 'assets/kishore.jpg',
          imgTeamWorkDescription1: 'Kishore',
          imgTeamWork2: 'assets/srikanth.jpg',
          imgTeamWorkDescription2: 'Srikanth',
          imgTeamWork3: 'assets/chandrababu.jpg',
          imgTeamWorkDescription3: 'Chandrababu',
          imgTeamWork4: 'assets/hemanth.jpg',
          imgTeamWorkDescription4: 'Hemanth',
          imgTeamWork5: 'assets/prasad.jpg',
          imgTeamWorkDescription5: 'Prasad',
        }
      ])
    })
 }
}
