import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute} from '@angular/router';
import {LoginService} from '../../pages/login/service/login.service';
import 'rxjs/add/operator/map';
import {CookieService} from "ngx-cookie";


@Injectable()
export class AuthGuard implements CanActivate {
  constructor( public loginService: LoginService,
               public router: Router,
               public route: ActivatedRoute,
               private _cookieService: CookieService) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(' called authguard');
    return this.loginService.isAuthenticated().map((user) => {
      if (user) {
        return true;
      } else {
        this.route.queryParams.forEach((param) => {
          this.setCookie(param);
        });
        this.router.navigate(['/login'], {
          queryParams: {
            returnTo: state.url
          }
        });
        return false;
      }
    }, (err) => {
      this.route.queryParams.forEach((param) => {
        this.setCookie(param);
      });
      this.router.navigate(['/login'], {
        queryParams: {
          returnTo: state.url
        }
      });
      return false;
    });
  }

  setCookie(queryParams) {
    console.log('set cookie');
    const returnNode = queryParams['returnTo'];
    const referalId = (returnNode && returnNode.indexOf('rfb') > -1) ? (returnNode && returnNode.split('?')[1].split('=')[1]) : '';
    console.log(referalId);
    if (!!referalId) {
      this._cookieService.put('rfb', referalId);
    }
  }

}
