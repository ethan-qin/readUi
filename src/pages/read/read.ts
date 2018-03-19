import { Component, ViewChild, ElementRef, ViewChildren } from '@angular/core';
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
  @ViewChildren('focus') focus: ElementRef;
  showBar: boolean = false;
  saturation: any;
  scrollWidth: number;
  pageWidth: number;
  pageNum: number;
  where:number=0;
  testArr: Array<any> = [];
  backUrl:string ="url('assets/imgs/qd.jpg')"
  article: string = data.bookChapter;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private statusBar: StatusBar
  ) {
    this.statusBar.hide();
    this.statusBar.overlaysWebView(true)
  }
  change(): void {
    console.log(this.saturation)
  }
  ionViewWillEnter() {
    this.scrollWidth = this.containers.nativeElement.parentNode.scrollWidth + 18;
    this.pageWidth = this.containers.nativeElement.offsetParent.clientWidth;
    this.pageNum = Math.ceil(this.scrollWidth / this.pageWidth)-1;
    for (let index = 0; index < this.pageNum; index++) {
      this.testArr.push({index:index+1,left:`-${(index+1)*this.pageWidth}px`,backLeft:`${(index+1)*this.pageWidth}px`})
    }
    console.log('选中的内容是',this.testArr.length)
  }
  ionViewDidLoad() {

  }
  next():void{
    if(this.where<this.testArr.length&&!this.showBar){
      this.where=this.where+1;
      console.log(this.where);
      return;
    }
  }

  prev():void{
    if(this.where>0&&!this.showBar){
      this.where=this.where-1;
      console.log(this.where)
      return;
    }

  }

  showbar():void{
    if(this.showBar){
      this.statusBar.hide();
    }else{
      this.statusBar.show();
      this.statusBar.overlaysWebView(true)
    }
    this.showBar=!this.showBar;
  }
}
