import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './login.component';

export const LOGIN_ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

export const LoginRouteModule: ModuleWithProviders = RouterModule.forChild(LOGIN_ROUTES);
