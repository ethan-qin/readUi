import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NavParams, Events } from 'ionic-angular';
/**
 * Generated class for the SearchCheckboxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-checkbox',
  templateUrl: 'search-checkbox.html',
})
export class SearchCheckboxComponent {

  searchList: Array<any> = [];
  content: string;
  onChanged: Function;
  onTouched: Function;
  constructor(
    private viewCtrl: ViewController,
    private navParams: NavParams,
    private events: Events
  ) {
    this.searchList = navParams.get('list');
  }

  private setValue(val: any): void {
    this.content += val;
    if (this.content) {
      // this.onChanged(this.content)
    }
    if (val.checked) {
      this.searchList.forEach(element => {
        if (element.idCode == val.idCode) {
          element.checked = false;
        }
      });
    } else {
      this.searchList.forEach(element => {
        if (element.idCode == val.idCode) {
          element.checked = true;
        }
      });
    }
  }

  private done(): void {
    this.events.publish('search:change', { 'key': 'searchCheckBox', "searchList": this.searchList });
    this.viewCtrl.dismiss()
  }

}
