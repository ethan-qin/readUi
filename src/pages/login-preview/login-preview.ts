import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

/**
 * Generated class for the LoginPreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login-preview',
  templateUrl: 'login-preview.html',
})
export class LoginPreviewPage {
  @ViewChild(Content) content:Content
  background:string ="url('assets/imgs/loginPreview.jpg')";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPreviewPage');
  }
  ionViewCanEnter(){
    console.log(this.content._elementRef)
  }
  goLogin():void{
    this.navCtrl.push('LoginInPage')
  }
}
