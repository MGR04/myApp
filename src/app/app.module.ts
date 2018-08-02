import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { MessagesPage } from '../pages/messages/messages';
import { ProfilePage } from '../pages/profile/profile';
import { MapPage } from '../pages/map/map';
import { NewpostPage } from '../pages/newpost/newpost';
import { SlidesPage } from '../pages/slides/slides';
import { NotificationsPage } from '../pages/notifications/notifications';
import { Login2Page } from '../pages/login2/login2';
import { Login3Page } from '../pages/login3/login3';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    MessagesPage,
    ProfilePage,
    MapPage,
    NewpostPage,
    SlidesPage,
    NotificationsPage,
    Login2Page,
    Login3Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    MessagesPage,
    ProfilePage,
    MapPage,
    NewpostPage,
    SlidesPage,
    NotificationsPage,
    Login2Page,
    Login3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
