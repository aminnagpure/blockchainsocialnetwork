import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {EmailValidator} from '../../shared/service/validators';
import {LoginService} from "./service/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public errorMessage: string;
  public error: Boolean = false;
  public loginForm: FormGroup;
  public returnUrl: string;
  public path: string;

  constructor(public _fb: FormBuilder,
              public route: ActivatedRoute,
              public router: Router,
              public loginService: LoginService) { }

  ngOnInit() {
    this.getReturnUrl();
    this.refreshForm();
  }

  getReturnUrl() {
    this.loginService.logOutUser();
    this.returnUrl = this.route.snapshot.queryParams['returnTo'] || '/dashboard';
  }

  refreshForm() {
    this.loginForm = this._fb.group({
      email: ['', [Validators.compose([Validators.required, EmailValidator.isValid])]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login(userModel: any, isValid: boolean) {
    if (isValid) {
      this.loginService.authenticate(userModel)
        .subscribe((res) => {
            this.error = false;
            this.router.navigateByUrl(this.returnUrl);
          },
          (err) => {
            const errCode = err.code;
            this.error = true;
            if (errCode === 'auth/wrong-password') {
              this.errorMessage = 'Password is incorrect';
            } else if (errCode === 'auth/invalid-email') {
              this.errorMessage = 'Email is incorrect';
            } else if (errCode === 400) {
              this.errorMessage = 'Email is not found';
            } else {
              this.errorMessage = 'Email and Password is incorrect!';
            }
          }
        );
    }
  }


}

