import { MaterialModule } from './../shared/material/material.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigateComponent } from './components/navigate/navigate.component';



@NgModule({
  declarations: [
    NavigateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    NavigateComponent
  ]
})
export class CoreModule { }
