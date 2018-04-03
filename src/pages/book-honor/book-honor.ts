import { NativeProvider } from './../../providers/native/native';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BookHonorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-honor',
  templateUrl: 'book-honor.html',
})
export class BookHonorPage {
  private isBack: boolean = true;
  private honorNum: number;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private native: NativeProvider
  ) {
    this.honorNum =26
  }
  ionViewCanEnter(){
  }
  ionViewWillLeave() {

  }
  ionViewDidLoad() {
    // if (this.isBack) {
      
    //   this.native.nativeTransition('slide:back')
    // }
    console.log('ionViewDidLoad BookHonorPage');
  }
}
