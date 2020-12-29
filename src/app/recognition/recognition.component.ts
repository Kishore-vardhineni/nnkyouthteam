import { Component, OnInit } from '@angular/core';
import { RecognitionService } from './recognition.service';

@Component({
  selector: 'app-recognition',
  templateUrl: './recognition.component.html',
  styleUrls: ['./recognition.component.scss']
})
export class RecognitionComponent implements OnInit {

  public  imgAndhrajyothi: string;
  public imgEenadu: string;
  public imgFtapcci: string;
  public imgHmtv: string;
  public imgNasscom: string;
  public imgTelanganaToday: string;
  public imgThub: string;
  public imgToi: string;
  public mediaTitle: string;
  public recognitionData: any;
  public recognitionTitle: string;

  constructor( private recognitionService: RecognitionService) {
     this. imgAndhrajyothi = '';
     this.imgEenadu = '';
     this.imgFtapcci = '';
     this.imgHmtv = '';
     this.imgNasscom = '';
     this.imgTelanganaToday = '';
     this.imgThub = '';
     this.imgToi = '';
     this.mediaTitle = '';
     this.recognitionData = {};
     this.recognitionTitle = '';
   }

  public ngOnInit(): void {
    this.getRecognitionData();
  }

  public getRecognitionData() {
     this.recognitionService.recognitionData().subscribe(data => {
        this.recognitionData = data;
        if(!this.recognitionData) {
          return null;
        } else {
          this.recognitionData.forEach(element => {
            this. imgAndhrajyothi = element.imgAndhrajyothi;
            this.imgEenadu = element.imgEenadu;
            this.imgFtapcci = element.imgFtapcci;
            this.imgHmtv = element.imgHmtv;
            this.imgNasscom = element.imgNasscom;
            this.imgTelanganaToday = element.imgTelanganaToday;
            this.imgThub = element.imgThub;
            this.imgToi = element.imgToi;
            this.mediaTitle = element.mediaTitle;
            this.recognitionTitle = element.recognitionTitle;
          })
        }
     })
  }

}
