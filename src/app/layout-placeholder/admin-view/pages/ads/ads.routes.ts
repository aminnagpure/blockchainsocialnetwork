import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AdsComponent} from './ads.component';
export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: AdsComponent
  }
];

export const AdsRoutingModule: ModuleWithProviders = RouterModule.forChild(DASHBOARD_ROUTES);
