import { Component, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

/**
 * Generated class for the SlidesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'slides',
  templateUrl: 'slides.html'
})
export class SlidesComponent {

  @ViewChild('Slides') slides: Slides;
  text: string;
  constructor() {

  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('进入页面')
  }
}
