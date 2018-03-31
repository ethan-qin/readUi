import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the LoginInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-in',
  templateUrl: 'login-in.html',
})
export class LoginInPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginInPage');
  }
  goAgreement(): void {
    this.modalCtrl.create('AgreementPage').present()
  }
  next():void{
    this.navCtrl.push('AuthCodePage')
  }
  changeState():void{
    this.navCtrl.push('StatePage')
  }
}
