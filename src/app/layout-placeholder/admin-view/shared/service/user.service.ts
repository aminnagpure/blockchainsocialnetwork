import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Users} from '../../../pages/register/service/register.service';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class UserService {
  currentUserId: string;
  userInfo: Observable<Users>;

  constructor(public afAuth: AngularFireAuth,
              public afs: AngularFirestore) {

  }

  loadUserInfo(): Observable<Users> {
    return this.afAuth.authState.switchMap(user => {
      if (user) {
        return this.afs.doc<Users>(`registeredUsers/${user.uid}`).valueChanges();
      } else {
        return Observable.of(null);
      }
    });
  }

  loadMembers(): Observable<Users[]> {
    return this.afAuth.authState.switchMap(user => {
      if (user) {
        return this.afs.collection('registeredUsers', ref => ref.where('referedBy','==', user.uid)).valueChanges();
      } else {
        return Observable.of(null);
      }
    });
  }

  updateUserProfile(uProfileModel) {
    const userRef: AngularFirestoreDocument<Users> = this.afs.doc(`registeredUsers/${uProfileModel.uid}`);
    return Observable.fromPromise(userRef.set(uProfileModel, { merge: true }));
  }

}
