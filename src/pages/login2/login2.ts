import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessagesPage } from '../messages/messages';
import { ProfilePage } from '../profile/profile';
import { NewpostPage } from '../newpost/newpost';
import { NotificationsPage } from '../notifications/notifications';
/**
 * Generated class for the Login2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login2',
  templateUrl: 'login2.html',
})
export class Login2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login2Page');
  }

  messages(){
  	this.navCtrl.push(MessagesPage)
  }

  profile(){
  	this.navCtrl.push(ProfilePage)
  }

  newpost(){
    this.navCtrl.push(NewpostPage)
  }

  notifications(){
    this.navCtrl.push(NotificationsPage)
  }
}
