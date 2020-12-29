import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  public imgTeamTitle: string;
  public imgTeamWork1: string;
  public imgTeamWorkDescription1: string;
  public imgTeamWork2: string;
  public imgTeamWorkDescription2: string;
  public imgTeamWork3: string;
  public imgTeamWorkDescription3: string;  
  public imgTeamWork4: string;
  public imgTeamWorkDescription4: string;
  public imgTeamWork5: string;
  public imgTeamWorkDescription5: string;
  public teamData: any;

  constructor( public teamService: TeamService ) {
    this.imgTeamTitle = '';
    this.imgTeamWork1 = '';
    this.imgTeamWorkDescription1 = '';
    this.imgTeamWork2 = '';
    this.imgTeamWorkDescription2 = '';
    this.imgTeamWork3 = '';
    this.imgTeamWorkDescription3 = '';
    this.imgTeamWork4 = '';
    this.imgTeamWorkDescription4 = '';
    this.imgTeamWork4 = '';
    this.imgTeamWorkDescription4 = '';
    this.teamData = {};
   }

   ngOnInit(): void {
    this.getTeamData();
  }

  getTeamData() {
    this.teamService.teamData().subscribe(data => {
      this.teamData = data;
      if(!this.teamData) {
        return null;
      } else {
        this.teamData.forEach(element => {
           this.imgTeamTitle = element.imgTeamTitle;
           this.imgTeamWork1 = element.imgTeamWork1;
           this.imgTeamWorkDescription1 = element.imgTeamWorkDescription1;
           this.imgTeamWork2 = element.imgTeamWork2;
           this.imgTeamWorkDescription2 = element.imgTeamWorkDescription2;
           this.imgTeamWork3 = element.imgTeamWork3;
           this.imgTeamWorkDescription3 = element.imgTeamWorkDescription3;
           this.imgTeamWork4 = element.imgTeamWork4;
           this.imgTeamWorkDescription4 = element.imgTeamWorkDescription4;
           this.imgTeamWork5 = element.imgTeamWork5;
           this.imgTeamWorkDescription5 = element.imgTeamWorkDescription5;
        })
      }
    })
  }

}
