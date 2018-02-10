import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {ProfileRoutingModule} from './profile.routes';
import {AppCommonModule} from '../../common/common.module';
import {ReactiveFormsModule} from "@angular/forms";
import { UpdateProfileComponent } from './update-profile/update-profile.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    AppCommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProfileComponent,
    UpdateProfileComponent
  ]
})
export class ProfileModule { }
