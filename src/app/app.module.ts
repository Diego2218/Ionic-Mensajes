
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MessengerProvider } from '../providers/messenger/messenger';

const config = {
    apiKey: "AIzaSyDDB4WpX4IO1ogcO8-2s-a-2rDedtT9lvY",
    authDomain: "chatproject-6a927.firebaseapp.com",
    databaseURL: "https://chatproject-6a927.firebaseio.com",
    projectId: "chatproject-6a927",
    storageBucket: "chatproject-6a927.appspot.com",
    messagingSenderId: "494580718797"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MessengerProvider
  ]
})
export class AppModule {}
