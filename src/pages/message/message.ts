import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as echarts from 'echarts';
/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
  @ViewChild('chartBar') chartBar: ElementRef;
  @ViewChild('chartLine') chartLine: ElementRef;
  @ViewChild('chartPie') chartPie: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    console.log(echarts)

  }

}
