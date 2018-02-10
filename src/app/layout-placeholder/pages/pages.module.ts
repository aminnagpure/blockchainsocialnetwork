import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import {PagesRouteModule} from "./pages.routes";

@NgModule({
  imports: [
    CommonModule,
    PagesRouteModule
  ],
  declarations: [
    PagesComponent,
  ]
})
export class PagesModule { }
