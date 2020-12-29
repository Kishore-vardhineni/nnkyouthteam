// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ImagesComponent } from './images.component';

// Services
import { AuthGaurdService } from '../service/auth-gaurd.service';

const routes: Routes = [
  {
    path: '', component: ImagesComponent,
    canActivate: [AuthGaurdService],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesRoutingModule { }
