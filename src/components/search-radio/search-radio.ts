import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Component } from '@angular/core';
import { NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the SearchRadioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-radio',
  templateUrl: 'search-radio.html'
})
export class SearchRadioComponent {
  searchList: Array<any> = [];
  constructor(
    public navParams: NavParams,
    private events: Events,
    private viewCtrl: ViewController
  ) {
    this.searchList = navParams.get('list');
  }
  setValue(val: any): void {
    this.searchList.forEach(element => {
      if (element.idCode == val.idCode) {
        element.checked = true;
      } else {
        element.checked = false;
      }
    });
    this.done()
  }
  private done(): void {
    this.events.publish('search:change', { 'key': 'searchRadio', "searchList": this.searchList });
    this.viewCtrl.dismiss()
  }
}
