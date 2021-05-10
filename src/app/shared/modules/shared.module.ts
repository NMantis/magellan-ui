import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';


@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        CommonModule
    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        CommonModule
    ],
    providers: [{ provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }]
})

export class SharedModule { }