import { Component, OnInit } from '@angular/core';
import { MatDialog  } from '@angular/material/dialog';
import { EditpopulationPopupComponent } from '../editpopulation-popup/editpopulation-popup.component';
import { PopulationService } from 'src/app/service/population.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editpopulation',
  templateUrl: './editpopulation.component.html',
  styleUrls: ['./editpopulation.component.scss']
})
export class EditpopulationComponent implements OnInit {
 public editUser: any;

 public constructor(
    public dialog: MatDialog,
    private popService: PopulationService,
    private route: ActivatedRoute,
  ) {
    this.editUser = {};
   }

 public ngOnInit(): void {
    this.getPopulationId();
    this.editPopulationPopup(); 
  }

  public getPopulationId() {
    debugger
     this.route.params.subscribe(params => {
       let id = params['id'];
        this.popService.getPopulationById(id)
        .subscribe(response => {
           this.editUser = response;
        })
     })
  }

  public editPopulationPopup() {
    const dialogRef = this.dialog.open(EditpopulationPopupComponent, {
      width: '400px',
      data: { 
        address: this.editUser.address,
        age: this.editUser.age,
        date: this.editUser.date,
        email: this.editUser.email,
        firstName: this.editUser.firstName,
        gender: this.editUser.gender,
        id: this.editUser.id,
        lastName: this.editUser.lastName,
        mobileNumber: this.editUser.mobileNumber,
        password: this.editUser.password,
        role: this.editUser.role,
        village: this.editUser.village,
        vote: this.editUser.vote,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
