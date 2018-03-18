import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

/**
 * Generated class for the ReadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-read',
  templateUrl: 'read.html',
})
export class ReadPage {
  showBar: boolean = true;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private statusBar: StatusBar
  ) {
    this.statusBar.hide()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReadPage');
    setInterval(() => {
      this.showBar = !this.showBar;
    }, 2000)
  }

}
