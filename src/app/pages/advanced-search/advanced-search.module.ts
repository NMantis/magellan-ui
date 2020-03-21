import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import {MatCheckboxModule} from '@angular/material/checkbox';
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
    CommonModule, 
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes),
    LoadingModule
  ],
    exports: [AdvancedSearchComponent]
})
export class AdvancedSearchModule { }