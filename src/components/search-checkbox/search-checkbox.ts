import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the SearchCheckboxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export const BOOK_SEARCH_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SearchCheckboxComponent),
  multi: true
}
@Component({
  selector: 'search-checkbox',
  templateUrl: 'search-checkbox.html',
  providers: [BOOK_SEARCH_ACCESSOR]
})
export class SearchCheckboxComponent implements ControlValueAccessor {

  searchList: Array<any> = [];
  content: string;
  onChanged: Function;
  onTouched: Function;
  constructor(
    private navCtrl: NavController,
    public navParams: NavParams,
  ) {
    this.searchList = navParams.get('list');
  }
  writeValue(obj: any): void {
    this.content = obj;
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
    this.setValue(this.content)
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

  setValue(val: any): void {
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

}
