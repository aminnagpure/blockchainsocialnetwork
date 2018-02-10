import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {PagesComponent} from './pages.component';

export const PAGES_ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
        data: {
          title : 'login'
        }
      },
      {
        path: 'register',
        loadChildren: './register/register.module#RegisterModule',
        data: {
          title : 'register'
        }
      },
      {
        path: '',
        redirectTo: 'login'
      }
    ]
  }
];

export const PagesRouteModule: ModuleWithProviders = RouterModule.forChild(PAGES_ROUTES);
