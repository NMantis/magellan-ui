import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/modules/material.module';
import { PlaceContainerModule } from 'src/app/shared/place-container/place-container.module';
import { RecommendationsComponent } from './recommendations.component';
const routes: Routes = [
    {path: '', component: RecommendationsComponent}
  ]
@NgModule({
  declarations: [RecommendationsComponent],
  imports: [
    CommonModule, 
    SharedModule,
    PlaceContainerModule,
    RouterModule.forChild(routes)
  ],
    exports: [RecommendationsComponent]
})
export class RecommendationsModule { }