import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastermindRoutingModule } from './mastermind-routing.module';
import { MastermindComponent } from './mastermind.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MastermindComponent
  ],
  imports: [
    CommonModule,
    MastermindRoutingModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class MastermindModule { }
