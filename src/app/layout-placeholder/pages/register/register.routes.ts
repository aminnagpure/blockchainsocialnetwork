import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {RegisterComponent} from './register.component';

export const LOGIN_ROUTES: Routes = [
  {
    path: '',
    component: RegisterComponent
  }
];

export const RegesterRoutingModule: ModuleWithProviders = RouterModule.forChild(LOGIN_ROUTES);
