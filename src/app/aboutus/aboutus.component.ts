// Components
import { Component, OnInit } from '@angular/core';

// Services
import { AboutusService } from './aboutus.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  public aboutUsData: any;
  public accesssibility: string;
  public accesssibilityPara: string;
  public paragraph1: any;
  public paragraph2: any;
  public price: string;
  public pricePara: string;
  public processing: string;
  public processingPara: string;
  public title: string;
  public title2: string;

  constructor(private aboutUsService: AboutusService) {
    this.aboutUsData = {};
    this.accesssibility = '';
    this.accesssibilityPara = '';
    this.paragraph1 = '';
    this.paragraph2 = '';
    this.price = '';
    this.pricePara = '';
    this.processing = '';
    this.processingPara = '';
    this.title = '';
    this.title2 = '';

  }

  public ngOnInit(): void {
    this.getAboutUsData();
  }

  public getAboutUsData() {
    this.aboutUsService.aboutUsData().subscribe(data => {
      debugger
      this.aboutUsData = data;
      if (!this.aboutUsData) {
        return null
      } else {
        this.aboutUsData.forEach(element => {
          this.title = element.title;
          this.paragraph1 = element.paragraph1;
          this.paragraph2 = element.paragraph2;
          this.title2 = element.title2;
          this.processing = element.processing;
          this.processingPara = element.processingPara;
          this.accesssibility = element.accesssibility;
          this.accesssibilityPara = element.accesssibilityPara;
          this.price = element.price;
          this.pricePara = element.pricePara;
        })
      }
    })
  }


}
