import { Component, OnInit } from '@angular/core';
import { VideosService } from '../videos/videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  public videoData: any;
  public videoIntroductionToAngular2: string;
  public videoJalapalem: string;
  public videoMov_bbb: string;
  public videoTeamtarak: string;
  public videoTitle: string;


  constructor(public videoService: VideosService) {
    this.videoData = {};
    this.videoIntroductionToAngular2 = '';
    this.videoJalapalem = '';
    this.videoMov_bbb = '';
    this.videoTeamtarak = '';
    this.videoTitle = '';
  }

  public ngOnInit(): void {
    this.getVideosData();
  }

  public getVideosData() {
    this.videoService.videosData().subscribe(data => {
      this.videoData = data;
      if (!this.videoData) {
        return null;
      } else {
        this.videoData.forEach(element => {
          this.videoIntroductionToAngular2 = element.videoIntroductionToAngular2;
          this.videoJalapalem = element.videoJalapalem;
          this.videoMov_bbb = element.videoMov_bbb;
          this.videoTeamtarak = element.videoTeamtarak;
          this.videoTitle = element.videoTitle;
        })
      }
    })
  }

}
