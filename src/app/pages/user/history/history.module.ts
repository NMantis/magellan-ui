import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryResolver } from 'src/app/resolvers/history.resolver';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { RecommendationCardModule } from 'src/app/shared/recommendation-card/recommendation-card.module';
import { HistoryComponent } from './history.component';

const routes: Routes = [
  {
    path: '',
    component: HistoryComponent,
    resolve: { history: HistoryResolver }
  }
]

@NgModule({
  declarations: [HistoryComponent],
  imports: [
    SharedModule,
    RecommendationCardModule,
    RouterModule.forChild(routes)
  ],
  exports: [HistoryComponent]
})
export class HistoryModule { }