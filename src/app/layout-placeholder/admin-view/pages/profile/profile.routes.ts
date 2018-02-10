import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ProfileComponent} from './profile.component';
import {UpdateProfileComponent} from './update-profile/update-profile.component';

export const PROFILE_ROUTES: Routes = [
  {
    path: '',
    component: ProfileComponent
  },
  {
    path: 'update',
    component: UpdateProfileComponent
  }
];

export const ProfileRoutingModule: ModuleWithProviders = RouterModule.forChild(PROFILE_ROUTES);
