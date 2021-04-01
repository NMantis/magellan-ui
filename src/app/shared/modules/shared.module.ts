import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    ]
})

export class SharedModule { }