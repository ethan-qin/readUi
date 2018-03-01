import { NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';

/*
  Generated class for the BookProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookProvider {

  constructor(
    private navCtrl: NavController
  ) {
  }

  public openBook(data): void {
    this.navCtrl.push('BookAbstractPage', { bookId: data })
  }

}
