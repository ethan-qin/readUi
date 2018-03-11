import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UserServicesProvider } from '../../providers/user-services/user-services';
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

    this.userServe.userLogin(this.login).subscribe((f: User) => {
      console.log('个人页面拿到的f是', f);
    }, err => {
      console.log(err);
    })
  }

  open(): void {
    this.navCtrl.push('SettingPage')
  }

  openPayment(): void {
    this.navCtrl.push('PaymentPage')
  }

}

