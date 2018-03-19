import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Content, Slide } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SlideContainer } from 'ionic-angular/components/slides/swiper/swiper-interfaces';

import * as data from './../../assets/mock/data';
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
  @ViewChild('containers') containers: ElementRef;
  @ViewChild('focus') focus: ElementRef;
  showBar: boolean = false;
  saturation: any;
  scrollWidth: number;
  pageWidth: number;
  pageNum: number;
  testArr: Array<any> = [];
  article: string = data.bookChapter;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private statusBar: StatusBar
  ) {
    this.statusBar.hide();

  }
  change(): void {
    console.log(this.saturation)
  }
  ionViewWillEnter() {
    this.scrollWidth = this.containers.nativeElement.parentNode.scrollWidth + 18;
    this.pageWidth = this.containers.nativeElement.offsetParent.clientWidth;
    this.pageNum = this.scrollWidth / this.pageWidth;
    for (let index = 0; index < this.pageNum; index++) {
      this.testArr.push({index:index,transform:`translateX(-${(index+1)*this.pageWidth}px)`})
    }
    console.log(this.testArr)
  }
  ionViewDidLoad() {

  }

}
