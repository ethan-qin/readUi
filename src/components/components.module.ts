import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { BookModalComponent } from './book-modal/book-modal';
import { HomePopComponent } from './home-pop/home-pop';

@NgModule({
  declarations: [
    BookModalComponent,
    HomePopComponent
  ],
  imports: [
    IonicModule,
  ],
  entryComponents: [
    HomePopComponent
  ],
  exports: [
    BookModalComponent,
    HomePopComponent
  ]
})
export class ComponentsModule { }
