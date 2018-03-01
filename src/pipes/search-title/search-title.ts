import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchTitlePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'searchTitle',
})
export class SearchTitlePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: Array<string>, ...args) {
    console.log(value)
    if (value.length == 0) {
      return '类型'
    } else if (value.length == 1) {
      return value[0]['class'];
    } else {
      return value[value.length-1]['class'] + "等";
    }
  }
}
