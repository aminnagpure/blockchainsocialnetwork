import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DashboardComponent} from "./dashboard.component";
export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

export const DashboardRoutingModule: ModuleWithProviders = RouterModule.forChild(DASHBOARD_ROUTES);
