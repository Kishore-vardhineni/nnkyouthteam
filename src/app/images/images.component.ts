// Components
import { Component, OnInit } from '@angular/core';

// Services
import { ImagesService } from './images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  public imgagesData: any;
  public imgEenaduAdvertisament: string;
  public imgNnkpost: string;
  public imgNnkpost1: string;
  public imgNtrBirthday: string;
  public imgTeamTarak: string;
  public imgTeamTarak1: string;
  public imgTeamTarak2: string;
  public imgTeamTarak3: string;
  public imgTeamTarak4: string;
  public imgTeamTarak5: string;
  public imgTeamTarak6: string;
  public imgTeamTarak7: string;
  public imgTeamTarak8: string;
  public imgTeamTarak9: string;
  public imgTitle: string;

  constructor(private imgService: ImagesService) {
     this.imgagesData = {};
     this.imgEenaduAdvertisament = '';
     this.imgNnkpost = '';
     this.imgNnkpost1 = '';
     this.imgNtrBirthday = '';
     this.imgTeamTarak = '';
     this.imgTeamTarak1 = '';
     this.imgTeamTarak2 = '';
     this.imgTeamTarak3 = '';
     this.imgTeamTarak4 = '';
     this.imgTeamTarak5 = '';
     this.imgTeamTarak6 = '';
     this.imgTeamTarak7 = '';
     this.imgTeamTarak8 = '';
     this.imgTeamTarak9 = '';
     this.imgTitle = '';
   }

  ngOnInit(): void {
    this.getImagesData();
  }

  getImagesData() {
    this.imgService.imagesData().subscribe(data => {
       this.imgagesData = data;
       if(!this.imgagesData) {
         return null; 
       } else {
         this.imgagesData.forEach(element =>{
           this.imgEenaduAdvertisament = element.imgEenaduAdvertisament;
           this.imgNnkpost = element.imgNnkpost;
           this.imgNnkpost1 = element.imgNnkpost1;
           this.imgNtrBirthday = element.imgNtrBirthday;
           this.imgTitle = element.imgTitle;
           this.imgTeamTarak = element.imgTeamTarak;
           this.imgTeamTarak1 = element.imgTeamTarak1;
           this.imgTeamTarak2 = element.imgTeamTarak2;
           this.imgTeamTarak3 = element.imgTeamTarak3;
           this.imgTeamTarak4 = element.imgTeamTarak4;
           this.imgTeamTarak5 = element.imgTeamTarak5;
           this.imgTeamTarak6 = element.imgTeamTarak6;
           this.imgTeamTarak7 = element.imgTeamTarak7;
           this.imgTeamTarak8 = element.imgTeamTarak8;
           this.imgTeamTarak9 = element.imgTeamTarak9;
         })
       }
    })
  }

}
