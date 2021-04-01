import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { PlaceContainerModule } from 'src/app/shared/place-container/place-container.module';
import { HistoryComponent } from './history.component';
const routes: Routes = [
    {path: '', component: HistoryComponent}
  ]
@NgModule({
  declarations: [HistoryComponent],
  imports: [
    SharedModule,
    PlaceContainerModule,
    RouterModule.forChild(routes)
  ],
    exports: [HistoryComponent]
})
export class HistoryModule { }