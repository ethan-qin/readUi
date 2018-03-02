import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookCatalogPage } from './book-catalog';

@NgModule({
  declarations: [
    BookCatalogPage,
  ],
  imports: [
    IonicPageModule.forChild(BookCatalogPage),
  ],
})
export class BookCatalogPageModule {}
