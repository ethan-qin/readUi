import { Component, Input } from '@angular/core';

/**
 * Generated class for the RatingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'rating',
  templateUrl: 'rating.html'
})
export class RatingComponent {
  @Input() rating: number;
  text: string;
  ratingArr: Array<boolean>
  constructor() {
  }

  ngAfterViewInit() {
    this.ratingArr=[];
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('评分是', this.rating);
    for (let i = 0; i < 5; i++) {
      this.ratingArr.push(this.rating > i)
    }
  }

}
