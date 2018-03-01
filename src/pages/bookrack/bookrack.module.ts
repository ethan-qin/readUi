import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookrackPage } from './bookrack';

@NgModule({
  declarations: [
    BookrackPage,
  ],
  imports: [
    IonicPageModule.forChild(BookrackPage),
  ],
})
export class BookrackPageModule {}
