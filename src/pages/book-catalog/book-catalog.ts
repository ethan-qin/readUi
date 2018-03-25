import { NativeProvider } from './../../providers/native/native';
import { catalog } from './../../model/model';
import { Component, ViewChild, ViewChildren, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { BookServicesProvider } from '../../providers/book-services/book.services';

/**
 * Generated class for the BookCatalogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-catalog',
  templateUrl: 'book-catalog.html',
})
export class BookCatalogPage {
  @ViewChild('bookHeade') bookHeade: ElementRef;
  @ViewChild('scroll') scroll: any;
  @ViewChildren('list') list: ElementRef;
  cacheArr: Array<any> = [];
  date: Date = new Date();
  catalogArr: Array<catalog> = [];
  fristHeader:string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private native: NativeProvider,
    private bookServe: BookServicesProvider
  ) {
  }

  ionViewDidLoad() {

  }

  ionViewDidEnter() {
    this.getCatalog()
  }
  getCatalog(): void {
    this.bookServe.getChapterList(3).subscribe(f => {
      this.catalogArr = f.data.catalog;
      this.fristHeader=this.catalogArr[0].headerName;
      setTimeout(() => {
        this.setDomCss()
      }, 1000);
    })
  }

  setDomCss(): void {
    // if(this.list['_results'].length<=0){
    //   return;
    // }
    let top = this.list['_results'][0].nativeElement.getBoundingClientRect().top;
    let translateY = this.bookHeade.nativeElement.offsetHeight;
    this.scroll._scrollContent.nativeElement.onscroll = () => {
      this.cacheArr = [];
      if (this.list) {
        this.list['_results'].forEach(element => {
          this.cacheArr.push({ 'obj': element, 'top': element.nativeElement.getBoundingClientRect().top - top });
        });
      }
      this.cacheArr.forEach((element, index) => {
        if (element.top > 0 && element.top <= translateY) {
          this.bookHeade.nativeElement.style.transform = "translateY(" + (element.top) + "px)"
        } else {
          if (this.cacheArr[index].top <= 0) {
            this.bookHeade.nativeElement.style.transform = "translateY(" + translateY + "px)";
            this.bookHeade.nativeElement.innerHTML = this.cacheArr[index].obj.nativeElement.children[0].innerText;
          }
        }
      })
    }
  }
  read(item: catalog): void {
    this.native.pageGo(this.navCtrl, 'ReadPage', item);
  }
}
