import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchTitleFiltratePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'searchTitleFiltrate',
})
export class SearchTitleFiltratePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: Array<string>, ...args) {
    let filtrateArr: Array<any> = [];
    value.forEach(element => {
      if (element['idCode'] != 0) {
        filtrateArr.push(element)
      }
    });
    if (filtrateArr.length == 0) {
      return '不限';
    } else {
      return filtrateArr[filtrateArr.length - 1]['class'] + "等";
    }
  }
}
