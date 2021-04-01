import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/modules/shared.module';

import { LoadingModule } from 'src/app/shared/loading/loading.module';
import { AdvancedSearchComponent } from './advanced-search.component';

const routes: Routes = [
    {path: '', component: AdvancedSearchComponent}
  ]
@NgModule({
  declarations: [AdvancedSearchComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    LoadingModule
  ],
    exports: [AdvancedSearchComponent]
})
export class AdvancedSearchModule { }