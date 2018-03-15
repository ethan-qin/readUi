import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TimePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {

    args[0].split('-').forEach(element => {
      if(element=='MM'){
        element ='aaaaa'
      }
    });
    return '测试中';
  }
}
