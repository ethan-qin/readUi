import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UserServicesProvider, Login } from '../../providers/user-services/user-services';
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

  login: Login = {
    phone: 15826548556,
    password: '+35asd5a45'
  }
  constructor(
    public navCtrl: NavController,
    private userServe: UserServicesProvider
  ) {

    this.userServe.userLogin(this.login).subscribe(f => {
      console.log('个人页面拿到的f是', f);
    }, err => {
      console.log(err);
    })
  }

  open(): void {
    this.navCtrl.push('SettingPage')
  }

}
/**
 * 用户基本信息
 *
 * @author qin
 * @export
 * @class User
 */
export class User {
  nickName: string;         // 昵称
  token: string;            // token
  avatar: string;           // 头像
  idCode: number;           // 用户id
  monthlyTicket: number;    // 月票数
  recommendTicket: number;  // 推荐票数
  coni: number;             // 消费点数
  payRank: string;          // 等级
}
