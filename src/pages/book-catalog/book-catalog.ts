import { Component, ViewChild, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  @ViewChild('bookHeade') bookHeade: any;
  @ViewChild('scroll') scroll: any;
  @ViewChildren('list') list: any;
  offserTopArr: Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }
  ionViewDidEnter() {
    let top = this.list['_results'][0].nativeElement.getBoundingClientRect().top;
    this.scroll._scrollContent.nativeElement.onscroll = () => {
      this.offserTopArr = [];
      if (this.list) {
        this.list['_results'].forEach(element => {
          this.offserTopArr.push({ 'obj': element, 'top': element.nativeElement.getBoundingClientRect().top - top });
        });
      }
      this.offserTopArr.forEach(element => {
        if (element.top > 0 && element.top <= 38) {
          console.log(this.bookHeade)
          // this.title.nativeElement.style.transform = "translateY(" + (this.titlePosition - e.scrollTop) + "px)")
          this.bookHeade.nativeElement.style.transform = "translateY(" + (element.top) + "px)"
        }
      })
      console.log(this.offserTopArr)
    }
  }
}
