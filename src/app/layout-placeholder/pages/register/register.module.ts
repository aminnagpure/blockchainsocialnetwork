import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from './register.component';
import {RegesterRoutingModule} from './register.routes';
import {ReactiveFormsModule} from '@angular/forms';
import {EqualValidator} from './service/equal-validator.directive';
import {RegisterService} from './service/register.service';

@NgModule({
  imports: [
    CommonModule,
    RegesterRoutingModule,
    ReactiveFormsModule

  ],
  declarations: [
    RegisterComponent,
    EqualValidator
  ],
  providers: [
    RegisterService
  ]
})
export class RegisterModule { }
