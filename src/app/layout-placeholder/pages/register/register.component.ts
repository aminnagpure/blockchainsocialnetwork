import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {EmailValidator} from '../../shared/service/validators';
import {RegisterService, Users} from './service/register.service';
import {CookieService} from "ngx-cookie";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public errorMessage: string;
  public error: Boolean;
  public signUpForm: FormGroup;


  constructor(public _fb: FormBuilder,
              public _cookieService: CookieService,
              public registerService: RegisterService,
              public router: Router) { }

  ngOnInit() {
    this.refreshForm();
  }

  refreshForm() {
    this.signUpForm = this._fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.compose([Validators.required, EmailValidator.isValid])]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  register(userModel: any, isValid: boolean) {
    if (isValid) {
      userModel['referedBy'] = this._cookieService.get('rfb') || '';
      this.registerService.createUser(userModel)
        .subscribe((res) => {
            this.error = false;
            this.router.navigate(['/login']);
          },
          (err) => {
            this.error = false;
            console.log(err);
            this.errorMessage = 'Email is already used!';
          }
        );
    }
  }

}
