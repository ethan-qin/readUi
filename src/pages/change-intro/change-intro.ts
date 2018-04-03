import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChangeIntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-intro',
  templateUrl: 'change-intro.html',
})
export class ChangeIntroPage {
  content: string = "";
  maxLength: number = 100;
  nowLength: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeIntroPage');
  }
  setLength() {
    this.nowLength = this.content.length;
  }
}
