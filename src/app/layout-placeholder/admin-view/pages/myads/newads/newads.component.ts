import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdsModel, AdsService} from "../../../shared/service/ads.service";
import {Router} from "@angular/router";
import {StorageService} from "../../../shared/service/storage.service";

@Component({
  selector: 'app-newads',
  templateUrl: './newads.component.html',
  styleUrls: ['./newads.component.scss']
})
export class NewadsComponent implements OnInit {

  public adsForm: FormGroup;
  public uid: string;
  public mail: string;
  public adsValue: any;
  public operation: string;
  constructor( public _fb: FormBuilder,
               public router: Router,
               public _adService: AdsService,
               public _storageService: StorageService) { }

  ngOnInit() {
    this._adService.getUid().subscribe(user => {
      this.uid  = user.uid;
      this.mail = user.email;
    });

    this.adsValue = this._storageService.getAdsValue();
    if (this.adsValue) {
      this.refreshForm(this.adsValue);
      this.operation = 'old';
    } else {
      this.refreshForm({});
      this.operation = 'new'
    }
  }

  refreshForm(adsModel: any) {
    this.adsForm = this._fb.group({
      title: [ adsModel.title || '', [Validators.required]],
      description: [adsModel.description || ''],
      category: [adsModel.category || '']
    });
  }

  saveAd(adsModel, isValid) {
    if (isValid) {
      if (this.operation === 'new') {
        adsModel.uid = this.uid;
        adsModel.created_by = this.mail;
        adsModel.created_at = new Date();
        this._adService.createNewAds(adsModel)
          .subscribe((res) => {
            console.log('New ads created successfully');
            this.router.navigate(['/myads']);
          },(error) => {
            console.log('error occurred');
            console.log(error);
          });
      } else {
        this.adsValue.title = adsModel.title;
        this.adsValue.description = adsModel.description;
        this.adsValue.category = adsModel.category;
        this.adsValue.pudated_at = new Date();
        this._adService.updateAds(this.adsValue)
          .subscribe((res) => {
            console.log('data updated successfully');
            this.router.navigate(['/myads']);
          }, (error) => {
            console.log('error occurred');
            console.log(error);
          });
      }
    }
  }

}
