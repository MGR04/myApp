import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessagesPage } from '../messages/messages';
import { ProfilePage } from '../profile/profile';
import { NewpostPage } from '../newpost/newpost';
import { NotificationsPage } from '../notifications/notifications';
import { AlertController } from 'ionic-angular';
export class MyPage {
  
}
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
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

  // alerta() {
  //   const alert = this.alertCtrl.create({
  //     title: 'New Friend!',
  //     subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
  //     buttons: ['OK']
  //   });
  //   alert.present();
  // }
  
  

}
