import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {MyadsComponent} from './myads.component';
import {NewadsComponent} from './newads/newads.component';
export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: MyadsComponent
  },
  {
    path: 'create',
    component: NewadsComponent
  }
];

export const MyAdsRoutingModule: ModuleWithProviders = RouterModule.forChild(DASHBOARD_ROUTES);
