import { AndroidFullScreen } from "@ionic-native/android-full-screen";
import { Component, ViewChild, ElementRef, ViewChildren } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController, Content, Slide} from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SlideContainer } from "ionic-angular/components/slides/swiper/swiper-interfaces";

import { batteryStu } from"./../../model/model"
import * as data from "./../../assets/mock/data";
import { NativeProvider } from "../../providers/native/native";
/**
 * Generated class for the ReadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-read",
  templateUrl: "read.html"
})
export class ReadPage {
  @ViewChild("containers") containers: ElementRef;
  @ViewChildren("focus") focus: ElementRef;
  time: Date; // 系统时间
  battery: number; //电池状态
  showBar: boolean = false; // 页头页脚交互栏状态
  saturation: any; // 字体颜色
  article: string = data.bookChapter; // 章节内容
  scrollWidth: number; // 页面排版总宽度
  pageWidth: number; // 一版宽度
  pageNum: number; // 版数
  percent: string; // 阅读百分比
  where: number = 0; // 当前章节进度
  chapterItemArr: Array<any> = []; // 各版定位信息
  backUrl: string = "url('assets/imgs/qd.jpg')"; // 背景图片
  chapterName:string='第一章：风花雪月'//选中的章节名
  showChapter:boolean=true; // 是否显示跳转章节
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private statusBar: StatusBar,
    private androidFullScreen: AndroidFullScreen,
    private native: NativeProvider
  ) {
    this.androidFullScreen.showUnderSystemUI(); //只在安卓下生效
    this.statusBar.hide();
    this.setDateBattery()
  }
  change(): void {
    console.log(this.saturation);
  }
  ionViewWillEnter() {
    this.scrollWidth =
      this.containers.nativeElement.parentNode.scrollWidth + 22;
    this.pageWidth = this.containers.nativeElement.offsetParent.clientWidth;
    this.pageNum = Math.ceil(this.scrollWidth / this.pageWidth) - 1;
    for (let index = 0; index < this.pageNum; index++) {
      this.chapterItemArr.push({
        index: index + 1,
        left: `-${(index + 1) * this.pageWidth}px`,
        backLeft: `${(index + 1) * this.pageWidth}px`
      });
    }
    this.getPercent();
  }
  ionViewDidLeave() {
    this.statusBar.show();
    this.statusBar.overlaysWebView(true);
  }
  next(): void {
    this.setDateBattery();
    if (this.showBar) {
      this.showbar();
      return;
    }
    if (this.where < this.chapterItemArr.length) {
      this.where = this.where + 1;
      this.getPercent();
      return;
    }
  }

  prev(): void {
    this.setDateBattery();
    if (this.showBar) {
      this.showbar();
      return;
    }
    if (this.where > 0) {
      this.where = this.where - 1;
      this.getPercent();
      return;
    }
  }

  getPercent() {
    this.percent = "61.9%";
  }

  showbar(): void {
    this.setDateBattery();
    if (this.showBar) {
      this.showChapter =false;
      this.statusBar.hide();
    } else {
      this.statusBar.show();
      this.statusBar.overlaysWebView(true);
    }
    this.showBar = !this.showBar;
  }

  setDateBattery(): void {
    this.time = new Date();
    this.native.getBatteryStatus().then((f:batteryStu)=>{
      this.battery =f.level;
    });
  }

  back():void{
    this.navCtrl.pop();
  }
  goCatalog(){
    this.navCtrl.push('BookCatalogPage')
    this.showBar = false;
  }
}
