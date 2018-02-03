import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Element } from '@angular/compiler';
/**
 * Generated class for the BookAbstractPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-abstract',
  templateUrl: 'book-abstract.html',
})
export class BookAbstractPage {
  @ViewChild('abstract') abstract: any;
  bg: string
  content: string;
  showMore: boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private statusBar: StatusBar
  ) {
    // this.StatusBar.hide();
    this.statusBar.overlaysWebView(true);
    this.bg = `url('../../assets/imgs/bookbg1.jpg')`;
    this.content = `
    <span style="background: red;">双月当空</span>，无限可能的英魂世界孤寂黑暗，<br>神秘古怪的嬉命小丑百城联邦，三大帝国，异族横行，魂 兽霸幽这是一个英雄辈出的年代，人类卧薪尝胆重掌地球主权，孕育着进军高纬度的野望！重点是……二年级的废柴学长 王同学，如何使用嬉命轮盘，撬动整个世界，学妹们，请注意，学长来了！！！斗战一群：21222419（两千人战力群）斗
      战二群：12962047骷髅的微信公共号：kuloujingling00新浪微博：骷髅精灵
    `
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookAbstractPage');


  }
  ionViewDidEnter() {
    if (this.abstract.nativeElement.offsetHeight > 61) {
      this.showMore = true;
      console.log('显示');
    }
  }
  ionViewDidLeave() {
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#d23e3b');
  }
}
