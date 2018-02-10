import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AdsService} from "../../shared/service/ads.service";
import {StorageService} from "../../shared/service/storage.service";

@Component({
  selector: 'app-myads',
  templateUrl: './myads.component.html',
  styleUrls: ['./myads.component.scss']
})
export class MyadsComponent implements OnInit {

  adsList: any[];
  errorMessage: string;

  constructor(public router: Router,
              public _adService: AdsService,
              public _storageService: StorageService) { }

  ngOnInit() {
    this.loadAds();
  }

  editAds(value) {
    this._storageService.setAdsValue(value);
    this.router.navigate(['/myads/create']);
  }

  deleteAds(adsValue) {
    if (window.confirm('You will not be able to revert this operation!')) {
      this._adService.removeAds(adsValue)
        .subscribe(res => {
            this.loadAds();
          },
          (error) => {
            console.log('something went wrong');
            console.log(error);
          });
    }
  };

  private loadAds() {
    this._adService.getUid()
      .subscribe(cUser => {
         this._adService.loadAds(cUser.uid)
           .subscribe((res) => {
              if (res.length > 0 ) {
                this.adsList = res;
              } else {
                  this.errorMessage = 'No ads found Please create new one';
              }
           });
      },
        (error) => {
            console.log('User is not authenticated!');
        });
  }

}
