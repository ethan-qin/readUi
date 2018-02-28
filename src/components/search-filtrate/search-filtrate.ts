import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchFiltrateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-filtrate',
  templateUrl: 'search-filtrate.html'
})
export class SearchFiltrateComponent {
  searchList: Array<any> = [];
  constructor(
    public navParams: NavParams,
  ) {
    this.searchList = navParams.get('list');
  }

  toggle(item): void {
    this.searchList.forEach(element => {
      if (element.code == item.code) {
        if (element.list) {
          element.list.forEach(element => {
            if (item.idCode == element.idCode) {
              element.checked = true;
            } else {
              element.checked = false;
            }
          })
        }
      }
    })
  }

  ionViewDidLoad():void{
    console.log('页面初始化了',this.searchList);
  }

  ionViewWillLeave():void{
    console.log('销毁页面')
  }
}
