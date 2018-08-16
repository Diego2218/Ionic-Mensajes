import { Message } from './../../model/msgModel.interface';
import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';

@Injectable()
export class MessengerProvider {

  constructor(private dbProvider: AngularFirestore) {
    
  }

  putMessage(msj: Message){
    const id = this.dbProvider.createId();
    this.dbProvider.doc("Message/" + id).set(msj);
  }

  getMessages() {
    return this.dbProvider.collection<Message>("Message").valueChanges();
  }


}
