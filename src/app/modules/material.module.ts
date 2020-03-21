import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
const Mat_modules = [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    CommonModule
];

export class MaterialModule { }
@NgModule({
  imports: [
    Mat_modules
  ],
  exports: [
    Mat_modules
  ]
})
export class SharedModule { }