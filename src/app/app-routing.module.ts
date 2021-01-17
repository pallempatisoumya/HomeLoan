import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentsUploadComponent } from './documents-upload/documents-upload.component';
import { IncomeDetailsComponent } from './income-details/income-details.component';
import { Incomedetails2Component } from './incomedetails2/incomedetails2.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';

const routes: Routes = [
  {path:'IncomeDetails', component:IncomeDetailsComponent},
  {path:'incomedetails2',component:Incomedetails2Component},
  {path:'loandetails',component:LoanDetailsComponent},
  {path:'personaldetails',component:PersonalDetailsComponent},
  {path:'documentsupload',component:DocumentsUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
