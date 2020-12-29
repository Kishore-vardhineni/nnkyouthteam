import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationmenuService {

  constructor() { }

  navigationMenuData() {
    return new Observable(observer => {
      observer.next([
        {
          imgSlider1: 'assets/travellerphoto.jpg',
          imgSlider2: 'assets/jalapalemprabha.jpg',
          imgSlider3: 'assets/teamtarak.jpg',
          imgSlider4: 'assets/teamtarak1.jpg',
          imgSliderDesc1: 'DISRUPTING THE POST-HARVEST SUPPLY CHAIN',
          imgSliderDesc2: 'Delivering High Quality Farm Processed Produce Directly To The Consumers At Best Prices',
          imgSliderDesc3: 'TURNING FARMERS INTO AGRI ENTREPRENEURS',
          imgSliderDesc4: 'Empowering Enterprising Farmers With Technique And Knowledge For Primary Food Grading And Processing',
          imgSliderDesc5: 'CORONA VIRUS',
          imgSliderDesc6: 'Empowering Enterprising Farmers With Technique And Knowledge For Primary Food Grading And Processing'
        }
      ])
    })
  }
}
