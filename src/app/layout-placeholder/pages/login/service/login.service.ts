import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import {Router, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class LoginService {

  public user: any;
  constructor( public afAuth: AngularFireAuth,
               public router: Router) {
    this.afAuth.authState.subscribe((CurrUser) => {
      this.user = CurrUser;
    });
  }

  authenticate(userModel: any) {

    return Observable.fromPromise(this.afAuth.auth.signInWithEmailAndPassword(userModel.email, userModel.password));

  }

  isAuthenticated(): Observable<any> {
    return this.afAuth.authState;
  }

  logOutUser( ) {
    this.afAuth.auth.signOut();
  }

}
