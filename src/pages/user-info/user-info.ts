import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';
import { NativeProvider } from '../../providers/native/native';
import { UserServicesProvider } from '../../providers/user-services/user-services';

/**
 * Generated class for the UserInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-info',
  templateUrl: 'user-info.html',
})
export class UserInfoPage {
  userPreview: string;
  userName: string = 'read书友';
  intro: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private native: NativeProvider,
    private alertCtrl: AlertController,
    private userServe: UserServicesProvider,
    private events: Events
  ) {
    this.userPreview = this.navParams.get('userPreview');
    this.userName = this.navParams.get('userName');
    this.intro = this.navParams.get('intro');
  }

  ionViewDidEnter() {

  }


  alertSheet(): void {
    this.alertCtrl.create({
      cssClass: '_alert',
      buttons: [
        {
          text: '拍照',
          cssClass: '_text-center'
        },
        {
          text: '从手机相册选择',
          cssClass: '_text-center',
          handler: () => {
            this.changeAvatar()
          }
        },
        {
          text: '随机生成',
          cssClass: '_text-center'
        }
      ]
    }).present()
  }


  /**
   * 更换头像
   * 
   * @author qin
   * @memberof UserInfoPage
   */
  changeAvatar(): void {
    this.native.chooseImg().then(f => {
      if (f.stu) {
        this.userPreview = 'data:image/jpeg;base64,' + f.avatar;
        this.userServe.uploadAvatar(this.userPreview).then(f=>{
          this.userServe.setUserInfo().then(f=>{
            this.updateUserInfo()
          })
        })
      }
    }, err => {
      console.log('读取错误,请重试')
    })
  }

  updateUserInfo(): void {
    this.events.publish('_updateUserInfo',{})
  }

  openNickname():void{
    this.navCtrl.push('ChangeNicknamePage')
  }
  openIntro():void{
    this.navCtrl.push('ChangeIntroPage')
  }
}
