import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginRouteModule} from './login.routes';
import {LoginComponent} from './login.component';
import {LoginService} from "./service/login.service";

@NgModule({
  imports: [
    CommonModule,
    LoginRouteModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
