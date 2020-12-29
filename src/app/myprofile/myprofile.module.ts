import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyprofileRoutingModule } from './myprofile-routing.module';
import { MyprofileComponent } from './myprofile.component';
import { ProfileinformationComponent } from '../myprofile/profileinformation/profileinformation.component';
import { ManageaddressComponent } from './manageaddress/manageaddress.component';
import { AddnewaddressComponent } from './addnewaddress/addnewaddress.component';

@NgModule({
  declarations: [
    MyprofileComponent,
    ProfileinformationComponent,
    ManageaddressComponent,
    AddnewaddressComponent,
  ],
  imports: [
    CommonModule,
    MyprofileRoutingModule
  ]
})
export class MyprofileModule { }
