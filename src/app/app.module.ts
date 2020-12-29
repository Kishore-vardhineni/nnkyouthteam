import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../app/shared/shared.module';

import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomErrorStateMatcher } from '../app/CustomErrorStateMatcherComponent';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule

  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: CustomErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
