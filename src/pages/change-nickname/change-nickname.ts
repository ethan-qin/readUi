import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChangeNicknamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-nickname',
  templateUrl: 'change-nickname.html',
})
export class ChangeNicknamePage {
  nickName: string;
  nowNickName: string = "";
  change: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nickName = this.navParams.get('userName');
    this.nowNickName = this.nickName;
    this.setStu();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeNicknamePage');
  }

  setStu() {
    if (this.nickName !== this.nowNickName) {
      this.change = true;
    } else {
      this.change = false;
    }
  }

  save(): void {
    alert(1111)
  }
}
