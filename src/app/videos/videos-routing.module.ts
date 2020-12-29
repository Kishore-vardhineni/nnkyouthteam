import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideosComponent } from './videos.component';
import { AuthGaurdService } from '../service/auth-gaurd.service';

const routes: Routes = [
  {
    path: '', component: VideosComponent,
    canActivate: [AuthGaurdService],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
