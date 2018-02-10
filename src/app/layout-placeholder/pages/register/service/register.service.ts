import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from "angularfire2/auth";
import {Observable} from "rxjs/Observable";
import {AngularFirestore, AngularFirestoreDocument} from "angularfire2/firestore";

export interface Users {
  firstName?: string;
  lastName?: string;
  email: string;
  uid: string;
  referedBy?: string;
  referalName?: string;
  createdAt?: Date;
}

@Injectable()
export class RegisterService {

  constructor(public  afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              public router: Router) {

  }

  createUser(userModel) {
    return Observable.fromPromise(this.registerUser(userModel));
  }

  private registerUser(userData) {
    return this.afAuth.auth.createUserWithEmailAndPassword(userData.email, userData.password)
                .then((userCredential) => {
                        userData.uid = userCredential.uid;
                        userData.email = userCredential.email;
                        userData.createdAt = userCredential.metadata.creationTime;
                  return this.updateUserData(userData);
                });
  }

  updateUserData(userData: Users) {

    const userRef: AngularFirestoreDocument<Users> = this.afs.doc(`registeredUsers/${userData.uid}`);

    const data: Users = {
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      uid: userData.uid,
      referedBy: userData.referedBy,
      createdAt: userData.createdAt,
      referalName: ''
    };

    return userRef.set(data);

  }

}





