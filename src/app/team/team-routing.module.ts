import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamComponent } from './team.component';
import { AuthGaurdService } from '../service/auth-gaurd.service';

const routes: Routes = [
  {
    path: '', component: TeamComponent,
   // canActivate: [AuthGaurdService],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
