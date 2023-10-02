import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MayorOMenorRoutingModule } from './mayor-o-menor-routing.module';
import { MayorOMenorComponent } from './mayor-o-menor.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    MayorOMenorComponent
  ],
  imports: [
    CommonModule,
    MayorOMenorRoutingModule,
    FontAwesomeModule
  ]
})
export class MayorOMenorModule { }
