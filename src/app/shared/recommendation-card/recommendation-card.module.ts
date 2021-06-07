import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { PlaceContainerModule } from 'src/app/shared/place-container/place-container.module';
import { RatingsModule } from 'src/app/shared/ratings/ratings.module';
import { CountToModule } from 'angular-count-to';
import { RecommendationCardComponent } from './recommendation-card.component';


@NgModule({
  declarations: [RecommendationCardComponent],
  imports: [
    SharedModule,
    RatingsModule,
    CountToModule,
    PlaceContainerModule
  ],
    exports: [RecommendationCardComponent]
})
export class RecommendationCardModule { }