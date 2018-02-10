import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AuthGuard} from './layout-placeholder/shared/service/auth.guard';
import {AppRoutingModule} from './app.routes';
import {LoginService} from './layout-placeholder/pages/login/service/login.service';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {CookieModule} from "ngx-cookie";

const FIREBASE_MODULES = [
  AngularFireModule.initializeApp(environment.config.firebase),
  AngularFireAuthModule,
  AngularFirestoreModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FIREBASE_MODULES,
    CookieModule.forRoot()
  ],
  providers: [
    AuthGuard,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
