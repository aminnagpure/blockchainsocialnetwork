import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsComponent } from './ads.component';
import {AdsRoutingModule} from "./ads.routes";
import {AppCommonModule} from "../../common/common.module";
import {AdsService} from "../../shared/service/ads.service";

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    AdsRoutingModule
  ],
  declarations: [AdsComponent],
  providers: [
    AdsService
  ]
})
export class AdsModule { }
