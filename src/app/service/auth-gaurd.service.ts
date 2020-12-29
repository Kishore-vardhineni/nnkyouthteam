import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import { PopulationService } from './population.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService  implements CanActivate {

  constructor(private populationService: PopulationService, private router: Router ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
     debugger
     let url: string = state.url;
     console.log('Url:'+url);
     if(this.populationService.isUserLoggedIn()) {
       return true;
     } else {
      this.populationService.setRedirectUrl;
      this.router.navigate([this.populationService.getLoginUrl()]);
      return false;
     }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    debugger
     let loggedInUser = this.populationService.getLoggedInUser();
     if( loggedInUser.role === 'admin') {
       return true;
     } else {
        alert('Unauthorized to open link: '+ state.url);
        return false;
     }
  }
}
