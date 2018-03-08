import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  @ViewChild('bookPro') bookPro: any;
  @ViewChild('content') content: any;
  @ViewChild('title') title: any;
  bg: string
  bookcontent: string;
  showMore: boolean = false;
  titlePosition: number = 200;
  titleStyle = {
    "transform": "translateY(" + this.titlePosition + "px)",
    'display': 'inline-block',
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {

    this.bg = `url('assets/imgs/bookbg1.jpg')`;
    this.bookcontent = `
    <span style="background: red;">双月当空</span>，无限可能的英魂世界孤寂黑暗，<br>神秘古怪的嬉命小丑百城联邦，三大帝国，异族横行，魂 兽霸幽这是一个英雄辈出的年代，人类卧薪尝胆重掌地球主权，孕育着进军高纬度的野望！重点是……二年级的废柴学长 王同学，如何使用嬉命轮盘，撬动整个世界，学妹们，请注意，学长来了！！！斗战一群：21222419（两千人战力群）斗
      战二群：12962047骷髅的微信公共号：kuloujingling00新浪微博：骷髅精灵
    `
  }
  ionViewDidLoad() {
    this.titlePosition = this.bookPro.nativeElement.scrollHeight;
    this.content._elementRef.nativeElement.style.backgroundPositionY = 0 + 'px'
  }
  ionViewDidEnter() {
    if (this.abstract.nativeElement.offsetHeight > 61) {
      this.showMore = true;
    }
  }
  ionViewWillLeave() {
    // this.native.overlay(false)
  }
  scrollHandler(e) {
    this.content._elementRef.nativeElement.style.backgroundPositionY = -(e.scrollTop / 5) + 'px'
    if (e.scrollTop >= this.titlePosition) {
      this.title.nativeElement.style.transform = "translateY(" + 0 + "px)";
      return false
    }
    this.title.nativeElement.style.transform = "translateY(" + (this.titlePosition - e.scrollTop) + "px)"
  }

  openHonor(): void {
    this.navCtrl.push('BookHonorPage')
  }
  openCatalog(): void {
    this.navCtrl.push('BookCatalogPage')

  }
}
