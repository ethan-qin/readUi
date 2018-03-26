import { AndroidFullScreen } from "@ionic-native/android-full-screen";
import { Component, ViewChild, ElementRef, ViewChildren } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
  Content,
  Slide
} from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SlideContainer } from "ionic-angular/components/slides/swiper/swiper-interfaces";

import { batteryStu, catalog } from "./../../model/model";
import * as data from "./../../assets/mock/data";
import { NativeProvider } from "../../providers/native/native";
import { BookServicesProvider } from "../../providers/book-services/book.services";
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
  saturation: any = 0; // 跳转的章节
  article: string = ""; // 章节内容
  scrollWidth: number; // 页面排版总宽度
  pageWidth: number; // 一版宽度
  pageNum: number; // 版数
  percent: number; // 阅读百分比
  where: number = 0; // 当前章节进度
  chapterItemArr: Array<any> = []; // 各版定位信息
  backUrl: string = "url('assets/imgs/qd.jpg')"; // 背景图片
  chapterName: string; //选中的章节名
  chapterId: number = 1; //当前章节id;
  chapterNowIndex: number; //当前章节下标;
  chapterNextIndex: number; //下一章下标
  showChapter: boolean = true; // 是否显示跳转章节
  chapter: Array<any> = [];
  chapterDate: Array<catalog> = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private statusBar: StatusBar,
    private androidFullScreen: AndroidFullScreen,
    private native: NativeProvider,
    private bookServe: BookServicesProvider
  ) {
    this.androidFullScreen.showUnderSystemUI(); //只在安卓下生效
    this.statusBar.hide();
    this.setDateBattery();
    this.getChapter();
  }
  change(): void {
    console.log(this.saturation);
  }
  ionViewWillEnter() {
    this.getArticle(this.saturation);
  }

  /**
   * 获取章节内容
   *
   * @author qin
   * @param {number} id
   * @memberof ReadPage
   */
  getArticle(id: number): void {
    this.bookServe.getArticle(id + 1).subscribe(f => {
      this.article = f.data.article;
      setTimeout(() => {
        this.setPage();
      }, 1000);
    });
  }

  /**
   * 页面排版
   *
   * @author qin
   * @memberof ReadPage
   */
  setPage(): void {
    this.chapterItemArr = [];
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
  }

  /**
   * 获取章节信息
   *
   * @author qin
   * @memberof ReadPage
   */
  getChapter(): void {
    this.bookServe.getChapterList(45).subscribe(f => {
      this.chapterDate = f.data.catalog;
      this.setChapter();
    });
  }
  ionViewDidEnter() {}
  /**
   * 取出章节信息
   *
   * @author qin
   * @memberof ReadPage
   */
  setChapter(): void {
    for (const key in this.chapterDate) {
      if (this.chapterDate.hasOwnProperty(key)) {
        this.chapter.concat(this.chapterDate[key].catalog);
        this.chapterDate[key].catalog.forEach(element => {
          this.chapter.push(element);
        });
      }
    }
    this.chapterName = this.chapter[this.saturation].title;
    this.percent = this.chapter[this.saturation].percent;
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
    } else {
      this.saturation += 1;
      this.getArticle(this.saturation);
      this.where = 0;
      this.setChapter();
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
      this.getPercent("prev");
      return;
    } else {
      this.saturation -= 1;
      this.getArticle(this.saturation);
      this.where = 0;
      this.setChapter();
    }
  }

  /**
   * 设置当前章节百分比
   *
   * @author qin
   * @memberof ReadPage
   */
  getPercent(direction?: string): void {
    // 取出当前章节信息
    this.chapter.forEach((element, index) => {
      if (element.catalogId == this.chapterId) {
        this.chapterNowIndex = index;
        if (index != this.chapter.length - 1) {
          this.chapterNextIndex = index + 1;
        }
      }
    });
    // 当前章节一页应占百分比
    let a =
      (this.chapter[this.chapterNextIndex].percent -
        this.chapter[this.chapterNowIndex].percent) /
      (this.pageNum + 1);
    if (direction == "prev") {
      this.percent = parseFloat((this.percent - a).toFixed(2));
    } else {
      this.percent = parseFloat((this.percent + a).toFixed(2));
    }
  }

  showbar(): void {
    this.setDateBattery();
    if (this.showBar) {
      this.showChapter = false;
      this.statusBar.hide();
    } else {
      this.statusBar.show();
      this.statusBar.overlaysWebView(true);
    }
    this.showBar = !this.showBar;
  }

  setDateBattery(): void {
    this.time = new Date();
    this.native.getBatteryStatus().then((f: batteryStu) => {
      this.battery = f.level;
    });
  }

  back(): void {
    this.navCtrl.pop();
  }

  goCatalog() {
    this.navCtrl.push("BookCatalogPage");
    this.showBar = false;
  }
}
