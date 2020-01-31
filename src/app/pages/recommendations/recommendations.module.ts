import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/modules/material.module';
import { RouterModule,Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecommendationsComponent } from './recommendations.component';
const routes: Routes = [
    {path: '', component: RecommendationsComponent}
  ]
@NgModule({
  declarations: [RecommendationsComponent],
  imports: [
    CommonModule, 
    SharedModule,
    RouterModule.forChild(routes)
  ],
    exports: [RecommendationsComponent]
})
export class RecommendationsModule { }