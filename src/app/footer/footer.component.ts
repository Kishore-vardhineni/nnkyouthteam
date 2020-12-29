// Components
import { Component, OnInit } from '@angular/core';

// Services
import { FooterService } from './footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public address: string;
  public copyRights: string;
  public countryCode: number;
  public email: string;
  public footerData: any;
  public footerText: string;
  public mobileNumber: number;

  constructor( private footerService: FooterService) {
    this.address = '';
    this.copyRights = ''
    this.countryCode = 0;
    this.email = '';
    this.footerData = {};
    this.footerText = '';
    this.mobileNumber = 0;
  }

  public ngOnInit(): void {
    this.getFooterData();
  }

  public getFooterData() {
    this.footerService.footerData().subscribe(data => {
       this.footerData = data;
       if(!this.footerData) {
         return null;
       } else {
         this.footerData.forEach(element => {
           this.address = element.address;
           this.copyRights = element.copyRights;
           this.countryCode = element.countryCode; 
           this.email = element.email;
           this.footerText =  element.footerText;
           this.mobileNumber = element.mobileNumber;
         }) 
       }
    })
  }


}
