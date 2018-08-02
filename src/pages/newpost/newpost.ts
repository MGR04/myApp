import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Login2Page } from '../login2/login2';
/**
 * Generated class for the NewpostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newpost',
  templateUrl: 'newpost.html',
})
export class NewpostPage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  login2(){
  	this.navCtrl.push(Login2Page)
  }


}
