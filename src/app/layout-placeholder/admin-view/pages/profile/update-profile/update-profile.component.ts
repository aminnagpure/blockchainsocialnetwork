import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {StorageService} from "../../../shared/service/storage.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../shared/service/user.service";

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  public profileForm: FormGroup;
  public userDetailsInfo: any;
  constructor( public router: Router,
               public _fb: FormBuilder,
               public _userService: UserService,
               public _storageService: StorageService) { }

  ngOnInit() {
    const details = this._storageService.getUserDetail()
    if (details) {
      this.userDetailsInfo = details;
      this.refreshForm(details);
    } else {
      this.router.navigate(['/dashboard']);
      this.refreshForm({});
    }
  }

  refreshForm(userModel) {
      this.profileForm = this._fb.group({
        firstName: [ userModel.firstName || '', [Validators.required]],
        lastName: [ userModel.lastName || '', [Validators.required]]
      });
  }

  updateProfile(formModel, isValid) {
    if (isValid) {
      formModel.uid = this.userDetailsInfo.uid;
      console.log(formModel);
      this._userService.updateUserProfile(formModel)
        .subscribe(res => {
            console.log('user profile update successfully', res);
            this.router.navigate(['/dashboard']);
          },
          (error) => {
            console.log('error occurred', error);
          });
    }
  }

}
