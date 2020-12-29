import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/service/user';
import { PopulationService } from 'src/app/service/population.service';

@Component({
  selector: 'app-manageaddress',
  templateUrl: './manageaddress.component.html',
  styleUrls: ['./manageaddress.component.scss']
})
export class ManageaddressComponent implements OnInit {

  public loggedInUser:User;

  constructor( private populationService: PopulationService ) { }

  ngOnInit(): void {
     this.loggedInUser = this.populationService.getLoggedInUser();
  }

}
