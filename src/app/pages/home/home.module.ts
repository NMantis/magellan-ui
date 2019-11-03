import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/modules/material.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, 
    SharedModule,
    RouterModule
  ],
    exports: [HomeComponent]
})
export class HomeModule { }