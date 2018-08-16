import { Message } from './../../model/msgModel.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { MessengerProvider } from '../../providers/messenger/messenger';

@IonicPage()
@Component({
  selector: 'page-mensajes',
  templateUrl: 'mensajes.html',
})



export class MensajesPage {

  username: string;
  msgModel: Array<Message>;

  arrMsj = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private messaProv: MessengerProvider) {
    this.username = this.navParams.get('user');
  }


  ionViewWillLoad() {
    this.messaProv.getMessages().subscribe(msj => {
      this.msgModel = msj;
    }, (error) => {
      console.error(error);
    })
  }

}
