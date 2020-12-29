import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyprofileComponent } from './myprofile.component';
import { ProfileinformationComponent } from './profileinformation/profileinformation.component';
import { ManageaddressComponent } from './manageaddress/manageaddress.component';
import { AddnewaddressComponent } from './addnewaddress/addnewaddress.component';

const routes: Routes = [
  {
    path: '', component: MyprofileComponent,
    children: [
      { path: 'profile-information', component: ProfileinformationComponent },
      { path: 'manageaddress', component: ManageaddressComponent },
      { path: 'addnew-address', component: AddnewaddressComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyprofileRoutingModule { }
