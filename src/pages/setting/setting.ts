import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { NativeProvider } from '../../providers/native/native';
import { BasePage } from '../../common/basePage';
import { UserServicesProvider } from '../../providers/user-services/user-services';
import { LoginPreviewPage } from '../login-preview/login-preview';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage{

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private native: NativeProvider,
    private nativePageTransition: NativePageTransitions,
    private user:UserServicesProvider,
    private app:App
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }
  ionViewWillLeave() {
    // super.ionViewWillLeave()
  }
  checkUpdate() {
    this.native.sync()
  }
  go(): void {
    this.navCtrl.push('TestPage')
  }

  loginOut():void{
    this.user.loginOut().then(f=>{
      this.app.getRootNav().setRoot(LoginPreviewPage)
    },err=>{
      this.app.getRootNav().setRoot(LoginPreviewPage)
    })
  }
}
