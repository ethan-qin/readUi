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
  list: Array<object> = [
    {
      title: '会员等级',
      icon: 'ios-alarm-outline',
      badge: '高级VIP',
      page: 'UserLevelPage'
    },
    {
      title: '我的等级',
      icon: 'ios-alarm-outline',
      badge: 'LV18',
      page: 'MyLevelPage'
    },
    {
      title: '我的徽章',
      icon: 'badge',
      badge: '',
      page: 'MyBadgePage'
    },
    {
      title: '我的阅历',
      icon: 'fans',
      badge: '阅仙',
      page: 'ReadHistoryPage'
    },
    {
      title: '阅读偏好',
      icon: 'ios-alarm-outline',
      badge: '',
      page: ''
    },
    {
      title: '我的卡牌',
      icon: 'ios-alarm-outline',
      badge: '',
      page: 'MyCardPage'
    },
    {
      title: '签到',
      icon: 'sign',
      badge: '',
      page: 'CheckInPage'
    },
    {
      title: '领币',
      icon: 'ios-alarm-outline',
      badge: '淘金能赚起点币',
      page: ''
    },
    {
      title: '成为作家',
      icon: 'pen',
      badge: '',
      page: 'AuthorPage'
    },
  ]
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
  open(page: string): boolean {
    if (page == undefined || page == '') {
      return false;
    }
    this.navCtrl.push(page)
  }
  changeUserInfo(): void {
    this.navCtrl.push('UserInfoPage', { userPreview: this.userPreview, userName: this.userName, intro: '在看我，还在看我' })
  }


}

