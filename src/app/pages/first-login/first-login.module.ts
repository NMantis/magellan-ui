import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/modules/material.module';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RatingsModule } from 'src/app/shared/ratings/ratings.module';
import { FirstLoginComponent } from './first-login.component';
const routes: Routes = [
    {path: '', component: FirstLoginComponent}
  ]
@NgModule({
  declarations: [FirstLoginComponent],
  imports: [
    CommonModule, 
    SharedModule,
    RouterModule.forChild(routes),
    MatCheckboxModule,
    RatingsModule
  ],
  exports: [FirstLoginComponent]
})
export class FirstLoginModule { }