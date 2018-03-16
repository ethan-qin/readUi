import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { NativeProvider } from '../../providers/native/native';
import { BasePage } from '../../common/basePage';

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
export class SettingPage extends BasePage{

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private native: NativeProvider,
    private nativePageTransition: NativePageTransitions
  ) {
    super()
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
}
