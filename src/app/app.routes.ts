import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AuthGuard} from "./layout-placeholder/shared/service/auth.guard";

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: './layout-placeholder/pages/pages.module#PagesModule'
    
  },
  {
    path: '',
    loadChildren: './layout-placeholder/admin-view/admin-view.module#AdminViewModule',
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export  const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
