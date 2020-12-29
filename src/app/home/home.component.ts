// Components
import { Component, OnInit, ViewChild } from '@angular/core';

// Service
import { PopulationService } from '../service/population.service';

// Angular Material
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort';

// Router
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../service/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public displayedColumns: string[] = ['firstName', 'lastName', 'email', 'password', 'date', 'mobileNumber', 'gender', 'vote', 'role', 'action'];
  public homeData: any;
  public MyDataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    public popService: PopulationService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.homeData = {};
  }

  public ngOnInit(): void {
    this.getHomeData();
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.MyDataSource.filter = filterValue.trim().toLowerCase();
  }

  public getHomeData() {
    debugger
    this.homeData = this.popService.getAllPopulation();
    if (!this.homeData) {
      return null
    } else {
      this.MyDataSource = new MatTableDataSource();
      this.MyDataSource.data = this.homeData;
      this.MyDataSource.paginator = this.paginator;
      this.MyDataSource.sort = this.sort;
    }
  }

  public addPopulation() {
    this.router.navigate(['add-population'], { relativeTo: this.route })
  }

  public editPopulation(user: User) {
    debugger
    this.router.navigate(['edit-population', user.id],  { relativeTo: this.route });
  }

  public deletePopulation(user: User) {
    debugger
     this.router.navigate(['delete-population', user.id], { relativeTo: this.route })
  }
}

export interface Village {
  address: string;
  age: number;
  date: string;
  firstName: string;
  gender: string;
  id: number;
  lastName: string;
  mobileNumber: number;
  village: string;
  vote: string;
}
