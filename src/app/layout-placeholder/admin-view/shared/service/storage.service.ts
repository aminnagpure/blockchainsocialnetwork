import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  adsValue: any;
  userDetail: any;

  constructor() { }

  setAdsValue(value: any) {
    this.adsValue = value;
  }

  setUserDetail(value: any) {
    this.userDetail = value;
  }

  getAdsValue() {
    return this.adsValue;
  }

  getUserDetail() {
    return this.userDetail;
  }

}
