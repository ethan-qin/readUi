import { SearchRadioComponent } from './../search-radio/search-radio';
import { SearchCheckboxComponent } from './../search-checkbox/search-checkbox';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { Component } from '@angular/core';
import { SearchFiltrateComponent } from '../search-filtrate/search-filtrate';

/**
 * Generated class for the BookClassificationSearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'book-classification-search',
  templateUrl: 'book-classification-search.html'
})
export class BookClassificationSearchComponent {

  text: string;

  constructor(
    private popCtrl: PopoverController
  ) {
    console.log('Hello BookClassificationSearchComponent Component');
    this.text = 'Hello World';
    console.log(popCtrl)
  }
  fun(e): void {
    console.log(e)
    this.popCtrl.create(SearchCheckboxComponent, {}, { cssClass: 'searchPop' }).present({
      ev: e,
      animate:false
    })
  }
  fun1(e): void {
    console.log(e)
    this.popCtrl.create(SearchRadioComponent, {}, { cssClass: 'searchPop' }).present({
      ev: e,
      animate:false
    })
  }
  fun3(e): void {
    console.log(e)
    this.popCtrl.create(SearchFiltrateComponent, {}, { cssClass: 'searchPop' }).present({
      ev: e,
      animate:false
    })
  }
}
