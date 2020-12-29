import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutusService {

  constructor() { }

  public aboutUsData() {
    return new Observable(observer => {
      observer.next([
        {
          title: 'WHAT WE DO?',
          paragraph1: 'Our Food is a technology driven agribusiness platform that is on a mission to decentralize the food processing industry with an innovative farmer adoption and engagement supply-chain platform, based in Telangana, Andhra pradesh, Madhya Pradesh, Maharashtra and Karnataka.',
          paragraph2: 'We are disrupting the traditional centralized food processing industry by establishing a network of "Farmer Franchises" that deploy new age, low cost micro-processing units with the help of rural entrepreneurs to process the raw material at the farm gate.',
          title2: 'FARMERS BECOMING ENTREPRENEURS!',
          processing: 'PROCESSING',
          processingPara: 'We provide low cost processing equipment along with financial assistance so that the farmer has a market ready product to sell in the market.',
          price: 'PRICE',
          pricePara: 'We eliminate the middlemen in the supply chain thus reducing the transactional costs and providing the best price to the farmer and consumer.',
          accesssibility: 'ACCESSIBILITY',
          accesssibilityPara: 'We bridge the gap between the farmers and consumers through our platform thus reducing wastage, lead time and operational inefficiencies.'
        }
      ])
    })
  }
}
