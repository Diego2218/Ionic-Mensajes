import { Message } from './../../model/msgModel.interface';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class MessengerProvider {

  msjObserv: Observable<Message[]>;
  msjCollec: AngularFirestoreCollection<Message>;

  constructor(private dbProvider: AngularFirestore) {
    this.msjCollec = this.dbProvider.collection("mensajesCollec");
    this.msjObserv = this.msjCollec.valueChanges();
  }

  putMessage(msj){
    this.msjCollec.add(msj);
  }

  getMessages() {
    return this.msjObserv;
    //return this.dbProvider.collection<Message>("Message").valueChanges();
  }


}
