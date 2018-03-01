import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListMorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-more',
  templateUrl: 'list-more.html',
})
export class ListMorePage {
  stu: boolean = false;
  title: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListMorePage');
    this.title = this.navParams.get('title');
    console.log(this.title)
  }

}
