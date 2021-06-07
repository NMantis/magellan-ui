import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { RecommendationsComponent } from './recommendations.component';
import { RecommendationCardModule } from 'src/app/shared/recommendation-card/recommendation-card.module';

const routes: Routes = [
    {path: '', component: RecommendationsComponent}
  ]
@NgModule({
  declarations: [RecommendationsComponent],
  imports: [
    SharedModule,
    RecommendationCardModule,
    RouterModule.forChild(routes)
  ],
    exports: [RecommendationsComponent]
})
export class RecommendationsModule { }