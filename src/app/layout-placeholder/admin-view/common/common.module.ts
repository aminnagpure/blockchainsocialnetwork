import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from "@angular/router";
import {TruncatePipe} from "../shared/pipe/truncate.pipe";
import {CfilterPipe} from "../shared/pipe/cfilter.pipe";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    TruncatePipe,
    CfilterPipe
  ],
  exports: [
    HeaderComponent,
    TruncatePipe,
    CfilterPipe
  ]
})
export class AppCommonModule { }
