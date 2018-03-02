import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookHonorPage } from './book-honor';

@NgModule({
  declarations: [
    BookHonorPage,
  ],
  imports: [
    IonicPageModule.forChild(BookHonorPage),
  ],
})
export class BookHonorPageModule {}
