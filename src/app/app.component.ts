// COmponents
import { Component, OnInit } from '@angular/core';

// Services
import { AppService } from './app.service';
import { PopulationService } from 'src/app/service/population.service';
import { User } from './service/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nnkyouthteam';
  public aboutusNavTitle: string;
  public appData: any;
  public contactNavTitle: string;
  public dashboardNavTitle: string;
  public homeNavTitle: string;
  public imageNavTitle: string;
  public loginNavTitle: string;
  public recognitionsNavTitle: string;
  public teamNavTitle: string;
  public videosNavTitle: string;

  public navbarMenu: boolean;
  public loggedInUser: User;

  constructor(public appService: AppService, private populationService: PopulationService) {
    this.aboutusNavTitle = '';
    this.appData = {};
    this.contactNavTitle = '';
    this.dashboardNavTitle = '';
    this.homeNavTitle = '';
    this.imageNavTitle = '';
    this.loginNavTitle = '';
    this.recognitionsNavTitle = '';
    this.teamNavTitle = '';
    this.videosNavTitle = '';

    this.navbarMenu = false;
  }

  public ngOnInit() {
    debugger
    this.getAppData();
    this.loggedInUser = this.populationService.getLoggedInUser();
  }

  public loginDropdown() {
    debugger
    this.navbarMenu = true;
  }

  public getAppData() {
    this.appService.appData().subscribe(response => {
      this.appData = response;
      if (!this.appData) {
        return null;
      } else {
        this.appData.forEach(element => {
          this.aboutusNavTitle = element.aboutusNavTitle;
          this.contactNavTitle = element.contactNavTitle;
          this.dashboardNavTitle = element.dashboardNavTitle;
          this.homeNavTitle = element.homeNavTitle;
          this.imageNavTitle = element.imageNavTitle;
          this.loginNavTitle = element.loginNavTitle;
          this.recognitionsNavTitle = element.recognitionsNavTitle;
          this.videosNavTitle = element.videosNavTitle;
          this.teamNavTitle = element.teamNavTitle;
        });
      }
    })
  }
}


