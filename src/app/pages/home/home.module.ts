import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/modules/material.module';
import { HomeComponent } from './home.component';
import { LoadingModule } from 'src/app/shared/loading/loading.module';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { SheetModule } from 'src/app/shared/sheet/sheet.module';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    RouterModule,
    LoadingModule,
    MatBottomSheetModule,
    SheetModule
  ],
    exports: [HomeComponent]
})
export class HomeModule { }