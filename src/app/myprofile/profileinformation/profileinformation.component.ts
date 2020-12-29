import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/service/user';
import { PopulationService } from 'src/app/service/population.service';

@Component({
  selector: 'app-profileinformation',
  templateUrl: './profileinformation.component.html',
  styleUrls: ['./profileinformation.component.scss']
})
export class ProfileinformationComponent implements OnInit {

  public loggedInUser:User;

  constructor( private populationService: PopulationService ) { }

  ngOnInit(): void {
    debugger
     this.loggedInUser = this.populationService.getLoggedInUser();
     
  }

}
