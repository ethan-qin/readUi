import { Directive } from '@angular/core';
import { App } from 'ionic-angular';

/**
 * Generated class for the DomFinishDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[dom-finish]' // Attribute selector
})
export class DomFinishDirective {

  constructor(app:App) {
    console.log('Hello DomFinishDirective Directive');
  }
  
}
