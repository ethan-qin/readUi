import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { BookModalComponent } from './book-modal/book-modal';

@NgModule({
  declarations: [BookModalComponent],
  imports: [
    IonicModule,
  ],
  exports: [BookModalComponent]
})
export class ComponentsModule { }
