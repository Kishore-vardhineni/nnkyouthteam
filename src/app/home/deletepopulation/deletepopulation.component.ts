import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopulationService } from 'src/app/service/population.service';

@Component({
  selector: 'app-deletepopulation',
  templateUrl: './deletepopulation.component.html',
  styleUrls: ['./deletepopulation.component.scss']
})
export class DeletepopulationComponent implements OnInit {

  public allPopulation: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private popService: PopulationService
  ) { 
    this.allPopulation = {};
  }

  public ngOnInit(): void {
    this.getPopulationId();
    this.getPopulationData();
  }

  public getPopulationData() {
    debugger
    this.allPopulation = this.popService.getAllPopulation();
  }
  
  public getPopulationId() {
    debugger
     this.route.params.subscribe(params => {
       let id = params['id'];
        this.popService.deletePopulation(id);
        this.router.navigate(['home'], { relativeTo: this.route })
     })
  }

}
