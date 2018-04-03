import { Login, User } from './../../model/model';
import { Component } from '@angular/core';
import { IonicPage, NavController, Events } from 'ionic-angular';
import { UserServicesProvider } from '../../providers/user-services/user-services';
import { NativeProvider } from '../../providers/native/native';
/**
 * Generated class for the PersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-person',
  templateUrl: 'person.html',
})
export class PersonPage {
  userPreview: string;
  userName: string = 'read书友';
  constructor(
    public navCtrl: NavController,
    private userServe: UserServicesProvider,
    private native: NativeProvider,
    private events: Events
  ) {
    this.updateInfo()
  }
  ionViewDidLoad() {
    this.native.getStorage('_ReadUiIonicUserInfo').then((f: any) => {
      this.userPreview = f.data.avatar.url;
      this.userName = '书友' + f.data.user.username.substring(7)
    })
  }

  /**
   * 更新用户信息事件
   * 
   * @author qin
   * @memberof PersonPage
   */
  updateInfo(): void {
    this.events.subscribe('_updateUserInfo', () => {
      this.getUserInfo();
    })
  }

  /**
   * 读取用户信息
   * 
   * @author qin
   * @memberof PersonPage
   */
  getUserInfo(): void {
    this.native.getStorage('_ReadUiIonicUserInfo').then((f: any) => {
      this.userPreview = f.data.avatar.url;
      this.userName = '书友' + f.data.user.username.substring(7)
    })
  }
  open(): void {
    this.navCtrl.push('SettingPage')
  }

  openPayment(): void {
    this.navCtrl.push('PaymentPage')
  }
  openMessage(): void {
    this.navCtrl.push('MessagePage')
  }

  
  changeUserInfo(): void {
    this.navCtrl.push('UserInfoPage', { userPreview: this.userPreview, userName: this.userName, intro: '在看我，还在看我' })
  }
}

