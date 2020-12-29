// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';

// Components
import { AddpopulationComponent } from './addpopulation/addpopulation.component';
import { AddpopulationPopupComponent } from './addpopulation-popup/addpopulation-popup.component';
import { EditpopulationComponent } from './editpopulation/editpopulation.component';
import { EditpopulationPopupComponent } from './editpopulation-popup/editpopulation-popup.component';
import { DeletepopulationComponent } from './deletepopulation/deletepopulation.component';

@NgModule({
  declarations: [
    HomeComponent,
    AddpopulationComponent,
    AddpopulationPopupComponent,
    EditpopulationComponent,
    EditpopulationPopupComponent,
    DeletepopulationComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
