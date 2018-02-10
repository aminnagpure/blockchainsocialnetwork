import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AdsService} from '../../shared/service/ads.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {

  public adsList: any[];
  public errorMessage: String;
  public byCategory: String = 'all';

  constructor(public router: Router,
              public _adService: AdsService) { }

  ngOnInit() {
    this.loadAds();
  }

  loadAds() {
    this._adService.loadAllAds()
      .subscribe(res => {
        if (res.length > 0) {
          this.adsList = res;
        } else {
          this.errorMessage = 'Opsss.. No Ad`s found!';
        }
      });
  }

}
