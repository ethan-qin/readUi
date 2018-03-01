import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Component } from '@angular/core';
import { NavParams, Events } from 'ionic-angular';

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
    private events: Events,
    private viewCtrl: ViewController
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

  private done(): void {
    this.events.publish('search:change', { 'key': 'searchFiltrate', "searchList": this.searchList });
    this.viewCtrl.dismiss()
  }
}
