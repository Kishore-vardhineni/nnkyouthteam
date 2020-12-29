import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  appData() {
    return new Observable(observer => {
       observer.next([
         { 
           aboutusNavTitle: 'AboutUs',
           contactNavTitle: 'Contact',
           dashboardNavTitle: 'Dashboard',
           homeNavTitle: 'Home',
           imageNavTitle: 'Images',
           loginNavTitle: 'Login',
           recognitionsNavTitle: 'Recognitions',
           teamNavTitle: 'Team',
           videosNavTitle: 'Videos',
         }
       ])
    })
  }
}
