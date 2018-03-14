import { scoreItem } from './../../model/model';
import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the ScoreItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'score-item',
  templateUrl: 'score-item.html'
})
export class ScoreItemComponent {
  @Input('data') data: scoreItem;
  @Output() collect = new EventEmitter<number>();
  @Output() open = new EventEmitter<number>();
  constructor() {
  }
  openBook(bookId: number): void {
    this.open.emit(bookId)
  }
  collectBook(bookId: number): void {
    this.collect.emit(bookId)
  }
}
