import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StorageService} from '../../shared/service/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public userProfileDetails: any;
  public userProfileKeys: any;
  public profileLabel: any = {
                                'createAt' : 'Registered at:',
                                'firstName' : 'First Name:',
                                'lastName' : 'Last Name:',
                                'email' : 'Email:',
                                'referalName' : 'Refered By:'
                              };
  constructor(public router: Router,
              public _storageService: StorageService) { }

  ngOnInit() {
    const details = this._storageService.getUserDetail();
    console.log('from profile component', details);
    if (details) {
      this.userProfileDetails = details;
      this.userProfileKeys = Object.keys(this.userProfileDetails);
    } else {
      this.router.navigate(['/dashboard']);
    }
  }

}
