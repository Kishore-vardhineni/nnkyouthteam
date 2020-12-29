// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AddpopulationComponent } from './addpopulation/addpopulation.component';
import { DeletepopulationComponent } from './deletepopulation/deletepopulation.component';
import { EditpopulationComponent } from './editpopulation/editpopulation.component';
import { HomeComponent } from './home.component';

// Services
import { AuthGaurdService } from '../service/auth-gaurd.service';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    canActivate: [AuthGaurdService],
    canActivateChild: [AuthGaurdService],
    children: [
      {
        path: 'add-population', component: AddpopulationComponent,
      },
      {
        path: 'edit-population/:id', component: EditpopulationComponent,
      },
      { path: 'delete-population/:id', component: DeletepopulationComponent }
    ]
  },
  // {
  //   path: 'add-population', component: AddpopulationComponent,
  // },
  // {
  //   path: 'edit-population/:id', component: EditpopulationComponent,
  // },
  // { path: 'delete-population/:id', component: DeletepopulationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
