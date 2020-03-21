import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/modules/material.module';
import { RouterModule,Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecommendationsComponent } from './recommendations.component';
import { PlaceContainerModule } from 'src/app/shared/place-container/place-container.module';
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