import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyadsComponent } from './myads.component';
import {MyAdsRoutingModule} from './myads.routes';
import { NewadsComponent } from './newads/newads.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AdsService} from '../../shared/service/ads.service';
import {AppCommonModule} from "../../common/common.module";
import {StorageService} from "../../shared/service/storage.service";

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    MyAdsRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    MyadsComponent,
    NewadsComponent
  ],
  providers: [
    AdsService,
    StorageService
  ]
})
export class MyadsModule { }
