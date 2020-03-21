import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/modules/material.module';
import { FormsModule } from '@angular/forms';
//import {MatCheckboxModule} from '@angular/material/checkbox';
import { RouterModule,Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdvancedSearchComponent } from './advanced-search.component';
import { LoadingModule } from 'src/app/shared/loading/loading.module';

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