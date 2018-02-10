import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from "rxjs/Observable";

export interface AdsModel {
  title: string;
  description: string;
  category: string;
  uid?: string;
  created_at?: Date;
  created_by?: string;
  node_id?:string;
}


@Injectable()
export class AdsService {

  constructor(public afAuth: AngularFireAuth,
              public afs: AngularFirestore) {
  }

  createNewAds(adsModel) {
    return Observable.fromPromise(this.postAds(adsModel));
  }

  updateAds(adsModel) {
    const adRef: AngularFirestoreDocument<AdsModel> = this.afs.doc(`adsCollection/${adsModel.node_id}`);
    return Observable.fromPromise(adRef.set(adsModel, { merge: true }));
  }

  private postAds(adsData) {
    const adsCollection: AngularFirestoreCollection<AdsModel> = this.afs.collection(`adsCollection`);
    return adsCollection.add(adsData);
  }

  loadAds(uid: string) {
    return this.afs.collection('adsCollection', ref => ref.where('uid', '==', uid)).valueChanges();
  }

  loadAllAds() {
    return this.afs.collection('adsCollection').valueChanges();
  }

  removeAds(adsModel) {
    const adsRef: AngularFirestoreDocument<AdsModel> = this.afs.doc(`adsCollection/${adsModel.node_id}`);
    return Observable.fromPromise(adsRef.delete());
  }

  getUid(): Observable<any> {
    return this.afAuth.authState;
  }
}
