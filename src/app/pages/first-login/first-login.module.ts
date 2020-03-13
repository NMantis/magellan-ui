import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/modules/material.module';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FirstLoginComponent } from './first-login.component';
import { PlaceContainerModule } from 'src/app/shared/place-container/place-container.module';
const routes: Routes = [
    {path: '', component: FirstLoginComponent}
  ]
@NgModule({
  declarations: [FirstLoginComponent],
  imports: [
    CommonModule, 
    SharedModule,
    RouterModule.forChild(routes),
    PlaceContainerModule
  ],
  exports: [FirstLoginComponent]
})
export class FirstLoginModule { }