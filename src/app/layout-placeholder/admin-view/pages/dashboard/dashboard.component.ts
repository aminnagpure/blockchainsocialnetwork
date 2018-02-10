import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/service/user.service';
import {Users} from '../../../pages/register/service/register.service';
import {CookieService} from "ngx-cookie";
import {StorageService} from "../../shared/service/storage.service";
import {Router} from "@angular/router";
import {PagerService} from "../../shared/service/pager.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public userInfo: Users;
  public rMemList: Users[];
  public pagedMemList: any[];
  public pager: any = {};
  public location: string;
  constructor(public _userService: UserService,
              public router: Router,
              public _cookieService: CookieService,
              public _pagerService: PagerService,
              public _storageService: StorageService) {
  }

  ngOnInit() {
    this.location = window.location.origin;
    this.loadUserDetail();
    this.loadReferalInfo();
  }

  loadUserDetail() {
    this._userService.loadUserInfo()
      .subscribe(userInfo => {
        this.userInfo = userInfo;
        this._cookieService.put('user', JSON.stringify(userInfo));
      });
  }

  loadReferalInfo() {
    this._userService.loadMembers()
      .subscribe(res => {
        this.rMemList = res;
        this.setPage(1);
      });
  }

  memberDetail(mValue) {
     this._storageService.setUserDetail(mValue);
     this.router.navigate(['/profile']);
  }

  updateInfo(pValue) {
    this._storageService.setUserDetail(pValue);
    this.router.navigate(['/profile/update']);
  }

  /*Set pager list */
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this._pagerService.getPager(this.rMemList.length, page);

    console.log(this.pager);
    // get current page of items
    this.pagedMemList = this.rMemList.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
