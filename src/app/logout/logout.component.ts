import { Component, OnInit } from '@angular/core';
import { User } from '../service/user';
import { PopulationService } from '../service/population.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  public loggedInUser:User;

  constructor(private populationService: PopulationService, private router: Router) { }

  ngOnInit(): void {
    this.loggedInUser = this.populationService.getLoggedInUser();
  }

  public logOut() {
    debugger
    this.populationService.getLoggedOutUser();
    this.router.navigate([ this.populationService.getLoginUrl()]);
  }

}
