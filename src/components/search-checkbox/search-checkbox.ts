import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
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
  constructor() {
    this.searchList = [
      {
        idCode: 1,
        class: '上古蛮荒',
        checked: true
      },
      {
        idCode: 2,
        class: '热血江湖',
        checked: false
      },
      {
        idCode: 3,
        class: '古代情缘',
        checked: false
      },
      {
        idCode: 4,
        class: '宫闱宅斗',
        checked: false
      },
      {
        idCode: 5,
        class: '经商种田',
        checked: false
      },
      {
        idCode: 6,
        class: '古典架空',
        checked: false
      },
      {
        idCode: 7,
        class: '女尊王朝',
        checked: false
      }
    ]
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
