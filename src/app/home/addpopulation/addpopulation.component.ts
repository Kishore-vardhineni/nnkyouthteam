import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddpopulationPopupComponent } from '../addpopulation-popup/addpopulation-popup.component';


@Component({
  selector: 'app-addpopulation',
  templateUrl: './addpopulation.component.html',
  styleUrls: ['./addpopulation.component.scss']
})
export class AddpopulationComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  public ngOnInit(): void {
    this.addPopulationPopup();
  }


  public addPopulationPopup() {
    const dialogRef = this.dialog.open(AddpopulationPopupComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


