import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { UserServicesProvider } from '../../providers/user-services/user-services';
import { NativeProvider } from '../../providers/native/native';
import { BaseUI } from '../../common/baseUI';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the AuthCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auth-code',
  templateUrl: 'auth-code.html',
})
export class AuthCodePage extends BaseUI {
  rootPage: any;
  phone: number;
  code: number = 681898;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userServe: UserServicesProvider,
    private native: NativeProvider,
    private loadCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    super()
  }
  ionViewDidEnter() {
    this.phone = this.navParams.get('phone');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthCodePage');
  }
  login(): void {
    let loader = super.showLoading(this.loadCtrl);
    this.userServe.loginByAuthCode(this.phone, this.code).then(f => {
      loader.dismiss();
      super.showToast(this.toastCtrl, 'top', '登录成功');
      this.navCtrl.setRoot(TabsPage)
    }, err => {
      loader.dismiss()
      console.log('失败了', err);
    })
  }
}
