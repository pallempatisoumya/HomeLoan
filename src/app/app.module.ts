import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncomeDetailsComponent } from './income-details/income-details.component';
import { Incomedetails2Component } from './incomedetails2/incomedetails2.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { DocumentsUploadComponent } from './documents-upload/documents-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    IncomeDetailsComponent,
    Incomedetails2Component,
    LoanDetailsComponent,
    PersonalDetailsComponent,
    DocumentsUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
