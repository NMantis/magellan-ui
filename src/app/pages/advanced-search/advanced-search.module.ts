import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/modules/material.module';
import { LoadingModule } from 'src/app/shared/loading/loading.module';
import { AdvancedSearchComponent } from './advanced-search.component';

const routes: Routes = [
    {path: '', component: AdvancedSearchComponent}
  ]
@NgModule({
  declarations: [AdvancedSearchComponent],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes),
    LoadingModule
  ],
    exports: [AdvancedSearchComponent]
})
export class AdvancedSearchModule { }