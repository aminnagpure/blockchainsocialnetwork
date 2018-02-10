import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AdminViewComponent} from './admin-view.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminViewComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule',
      },
      {
        path: 'profile',
        loadChildren: './pages/profile/profile.module#ProfileModule',
      },
      {
        path: 'ads',
        loadChildren: './pages/ads/ads.module#AdsModule',
      },
      {
        path: 'myads',
        loadChildren: './pages/myads/myads.module#MyadsModule',
      }
    ]
  }
];

export const AdminViewRoutingModule: ModuleWithProviders = RouterModule.forChild(ADMIN_ROUTES);
