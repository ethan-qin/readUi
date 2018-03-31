import { AndroidFullScreen } from "@ionic-native/android-full-screen";
import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController, Content, Slide } from "ionic-angular";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/scan";
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
  @ViewChild("focus") focus: ElementRef;
  @ViewChild("articleContainer") articleContainer: ElementRef;
  time: Date; // 系统时间
  battery: number; //电池状态
  showBar: boolean = false; // 页头页脚交互栏状态
  saturation: any = 0; // 跳转的章节
  article: string = ""; // 章节内容
  scrollWidth: number; // 页面排版总宽度
  pageWidth: number; // 一版宽度
  pageHeight: number; // 一版高度
  pageNum: number; // 版数
  percent: number; // 阅读百分比
  percentMark: number; // 阅读百分比
  onePagePercent: number; // 阅读百分比
  where: number = 0; // 当前章节进度
  backUrl: string = "url('assets/imgs/qd.jpg')"; // 背景图片
  fontColor: string = "";
  fontSize: number = 1.6; // 字体大小
  lineHeight: number = 2.5; // 行高
  chapterName: string; //选中的章节名
  chapterId: number = 1; //当前章节id;
  chapterNowIndex: number; //当前章节下标;
  chapterNextIndex: number; //下一章下标
  showChapter: boolean = false; // 是否显示跳转章节
  chapter: Array<any> = [];
  chapterDate: Array<catalog> = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private statusBar: StatusBar,
    private androidFullScreen: AndroidFullScreen,
    private native: NativeProvider,
    private bookServe: BookServicesProvider,
    private viewCtrl: ViewController
  ) {
    this.androidFullScreen.showUnderSystemUI(); //只在安卓下生效
    this.statusBar.hide();
    this.setDateBattery();
    setTimeout(() => {
      this.backUrl = "#1c1c1c";
      this.fontColor = "#717171";
    }, 5000000);
  }
  change(): void {
    if (this.showBar) {
      this.showChapter = true;
    }
    console.log(this.saturation);
  }
  ionViewWillEnter() {
    this.getArticle(this.saturation);
    this.pageWidth = this.focus.nativeElement.scrollWidth;
    this.pageHeight = this.focus.nativeElement.scrollHeight;
  }

  /**
   * 获取章节内容
   *
   * @author qin
   * @param {number} id //章节id
   * @param {string} [direction]
   * @returns {Promise<any>}
   * @memberof ReadPage
   */
  getArticle(id: number, direction?: string): Promise<any> {
    return new Promise(resolve => {
      if (!direction) {
        direction = "next";
      }
      this.articleContainer.nativeElement.style.transition = "all 0ms";

      this.bookServe.getArticle(id + 1).subscribe(f => {
        this.article = f.data.article;
        this.articleContainer.nativeElement.style.transition = "all 350ms";

        setTimeout(() => {
          this.setPage();
          resolve();
        }, 10);
      });
    });
  }

  /**
   * 页面排版
   *
   * @author qin
   * @memberof ReadPage
   */
  setPage(): void {
    this.scrollWidth = this.containers.nativeElement.parentNode.scrollWidth + 22;
    this.pageNum = Math.ceil(this.scrollWidth / this.pageWidth) - 1;
    this.getChapter();
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
    this.percentMark = this.chapter[this.saturation].percent;
    this.chapter.forEach((element, index) => {
      if (element.catalogId == this.chapterId) {
        this.chapterNowIndex = index;
        if (index != this.chapter.length - 1) {
          this.chapterNextIndex = index + 1;
        }
      }
    });
    // 当前章节一页应占百分比
    this.onePagePercent =
      (this.chapter[this.chapterNextIndex].percent -
        this.chapter[this.chapterNowIndex].percent) /
      (this.pageNum + 1);
    // 页面进度
    this.getPercent();
  }

  ionViewDidLeave() {
    this.statusBar.show();
    this.statusBar.overlaysWebView(true);
  }

  click(e: MouseEvent): void {
    if (e.x < this.pageWidth / 3) {
      console.log("点击左边");
      this.prev();
    } else if (e.x >= this.pageWidth / 3 && e.x / 2 <= this.pageWidth / 3) {
      console.log("点击中间");
      this.showbar();
    } else {
      console.log("点击右边");
      this.next();
    }
  }

  test(e: MouseEvent) {
    console.log("点击我了，", e);
    e.stopPropagation();

    return false;
  }

  next(): void {
    this.setDateBattery();
    if (this.showBar) {
      this.showbar();
      return;
    }
    if (this.where < this.pageNum) {
      this.where += 1;
      this.articleAnimation();
      this.getPercent();
      return;
    } else {
      this.saturation += 1;
      this.articleContainer.nativeElement.style.transform = `translateX(0px)`;
      this.getArticle(this.saturation).then(() => {
        this.where = 0;
        this.setChapter();
      });
    }
  }

  prev(): void {
    this.setDateBattery();
    if (this.showBar) {
      this.showbar();
      return;
    }
    if (this.where > 0) {
      this.where -= 1;
      this.getPercent("prev");
      this.articleAnimation();
      return;
    } else {
      this.saturation -= 1;

      this.getArticle(this.saturation).then(() => {
        this.removeAnimation();
        this.where = this.pageNum;
        this.articleAnimation().then(() => {
          this.addAnimation();
        });
      });
      this.setChapter();
    }
  }

  addAnimation(): void {
    this.articleContainer.nativeElement.style.transition = "all 350ms";
  }

  removeAnimation(): void {
    this.articleContainer.nativeElement.style.transition = "all 0ms";
  }

  articleAnimation(): Promise<any> {
    return new Promise(resolve => {
      this.articleContainer.nativeElement.style.transform = `translateX(${-this.pageWidth * this.where}px)`;
      setTimeout(() => {
        resolve();
      }, 20);
    });
  }

  /**
   * 设置当前章节百分比
   *
   * @author qin
   * @memberof ReadPage
   */
  getPercent(direction?: string): void {
    this.percent = parseFloat(
      (this.onePagePercent * this.where + this.percentMark).toFixed(2)
    );
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
    console.log('测试数据是', this.navCtrl.indexOf(this.viewCtrl))
    this.navCtrl.push("BookCatalogPage");
    this.showBar = false;
  }
}
