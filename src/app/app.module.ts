import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { MessagesPage } from '../pages/messages/messages';
import { ProfilePage } from '../pages/profile/profile';
import { MapPage } from '../pages/map/map';
import { NewpostPage } from '../pages/newpost/newpost';
<<<<<<< HEAD
import { SlidesPage } from '../pages/slides/slides';
=======
>>>>>>> parent of e33c99a... ggg

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    SlidesPage,
    HomePage,
    RegisterPage,
    LoginPage,
    DashboardPage,
    MessagesPage,
    ProfilePage,
<<<<<<< HEAD
    MapPage,
    NewpostPage,
    SlidesPage
=======
    MapPage
>>>>>>> parent of 5692c93... Revert "sliders"
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SlidesPage,
    HomePage,
    RegisterPage,
    LoginPage,
    DashboardPage,
    MessagesPage,
    ProfilePage,
<<<<<<< HEAD
    MapPage,
    NewpostPage,
    SlidesPage
=======
    MapPage
>>>>>>> parent of 5692c93... Revert "sliders"
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
