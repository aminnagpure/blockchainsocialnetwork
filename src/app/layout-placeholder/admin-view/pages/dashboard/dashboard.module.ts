import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {DashboardRoutingModule} from "./dashboard.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
