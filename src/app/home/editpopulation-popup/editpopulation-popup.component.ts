import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PopulationService } from 'src/app/service/population.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editpopulation-popup',
  templateUrl: './editpopulation-popup.component.html',
  styleUrls: ['./editpopulation-popup.component.scss']
})
export class EditpopulationPopupComponent implements OnInit {
  public allPopulation: any;
  constructor(
    public dialogRef: MatDialogRef<EditpopulationPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private popService: PopulationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.allPopulation = {};
  }

  public ngOnInit(): void {
    debugger
   // this.getPopulationData();
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  // public getPopulationData() {
  //   this.allPopulation = this.popService.getAllPopulation();
  // }

  public updatePopulation() {
    debugger
    this.allPopulation = JSON.parse(localStorage.getItem('populations'));
    for (let i = 0; i < this.allPopulation.length; i++) {
      if (this.allPopulation[i].id === this.data.id) {
        this.allPopulation[i].firstName = this.data.firstName;
        this.allPopulation[i].lastName = this.data.lastName;
        this.allPopulation[i].password = this.data.password;
        this.allPopulation[i].age = this.data.age;
        this.allPopulation[i].date = this.data.date;
        this.allPopulation[i].mobileNumber = this.data.mobileNumber;
        this.allPopulation[i].email = this.data.email;
        this.allPopulation[i].village = this.data.village;
        this.allPopulation[i].address = this.data.address;
        this.allPopulation[i].gender = this.data.gender;
        this.allPopulation[i].vote = this.data.vote;
        localStorage.setItem('populations', JSON.stringify(this.allPopulation));
        this.popService.updatePopulation(this.data)
          .subscribe(response => {
            this.allPopulation = response;
            this.router.navigate(['/home'], { relativeTo: this.route })
          });  
      }
    }
  }
}
