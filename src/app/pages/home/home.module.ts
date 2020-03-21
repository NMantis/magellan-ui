import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/modules/material.module';
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