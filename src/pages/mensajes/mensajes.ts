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
  mensaje: Message;

  texto = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private messaProv: MessengerProvider) {
    this.username = this.navParams.get('username');

    this.messaProv.getMessages().subscribe(msj => {
      this.msgModel = msj;
      this.msgModel.sort(function(a,b){
        return (a.fecha > b.fecha) ? 1:-1;
      })
      console.log(this.msgModel);
    }, (error) => {
      console.error(error);
    })

  }

  sendMessage(){
    this.mensaje = {
      name: this.username,
      msj: this.texto,
      fecha: new Date()
    }
    this.messaProv.putMessage(this.mensaje);
  }



  ionViewWillLoad() {
    
  }

}
