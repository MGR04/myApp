import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SlidesPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Register', component: RegisterPage},
      { title: 'Login', component: LoginPage},
      { title: 'Messages', component: MessagesPage},
      { title: 'Profile', component: ProfilePage},
      { title: 'Map', component: MapPage},
      { title: 'Slides', component: SlidesPage},
      { title: 'Newpost', component: NewpostPage},
      { title: 'Notifications', component: NotificationsPage},
      { title: 'Login2', component: Login2Page},
      { title: 'Login3', component: Login3Page}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
