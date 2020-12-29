import { Injectable } from '@angular/core';
import { Init } from '../service/population.local';
import { of } from 'rxjs';
import { map } from 'rxjs/Operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class PopulationService extends Init {
  public allPopulation: any;
  public population: any;
  private loginUrl: string = '/login';
  private redirectUrl: string = '/';
  private loggedInUser: User;
  private isloggedIn: boolean = false;

  constructor() {
    super();
    console.log('PopulationService Works');
    this.load();
    this.allPopulation = {};
  }

  public getLoginUserData() {
    this.allPopulation = JSON.parse(localStorage.getItem('populations'));
    let usersObservable = of(this.allPopulation);
    return usersObservable;
  }

  public getAllPopulation() {
    debugger
    this.allPopulation = JSON.parse(localStorage.getItem('populations'));
    return this.allPopulation;
  }

  public getPopulationById(id: number) {
    return this.getLoginUserData()
      .pipe(map(editPopulation => {
        let user = editPopulation.find((user) => user.id === id);
        return user;
      }))
  }

  public addPopulation(newPop) {
    debugger
    this.population = JSON.parse(localStorage.getItem('populations'));
    this.population.push(newPop);
    localStorage.setItem('populations', JSON.stringify(this.population));
  }

  public updatePopulation(user: User) {
    return this.getLoginUserData()
      .pipe(map(users => {
        let userObj = users.find((obj) => (obj.id === user.id));
        userObj = user;
        return userObj;
      }))
  }

  public deletePopulation(id) {
    debugger
    this.population = JSON.parse(localStorage.getItem('populations'));

    for (var i = 0; i < this.population.length; i++) {
      if (this.population[i].id == id) {
        this.population.splice(i, 1);
      }
    }
    localStorage.setItem('populations', JSON.stringify(this.population));
  }

  public isUserAuthenticated(username: string, password: string) {
    debugger
    return this.getLoginUserData()
      .pipe(map(users => {
        let user = users.find((user) => (user.email === username) && (user.password === password));
        if (user) {
          this.isloggedIn = true;
          this.loggedInUser = user;
        } else {
          this.isloggedIn = false;
        }
        return this.isloggedIn;
      }));
  }

  public isUserLoggedIn() {
    return this.isloggedIn;
  }

  public getRedirectUrl() {
    return this.redirectUrl;
  }

  public getLoggedInUser(): User {
    return this.loggedInUser;
  }

  public getLoggedOutUser(): void {
    this.isloggedIn = false;
  }

  public setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }

  public getLoginUrl(): string {
    return this.loginUrl;
  }
}
