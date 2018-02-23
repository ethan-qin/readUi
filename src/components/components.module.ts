import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { BookModalComponent } from './book-modal/book-modal';
import { HomePopComponent } from './home-pop/home-pop';
import { SexPopComponent } from './sex-pop/sex-pop';
import { SlidesComponent } from './slides/slides';
import { TimePopComponent } from './time-pop/time-pop';

@NgModule({
  declarations: [
    BookModalComponent,
    HomePopComponent,
    SexPopComponent,
    SlidesComponent,
    TimePopComponent,
  ],
  imports: [
    IonicModule,
  ],
  entryComponents: [
    BookModalComponent,
    HomePopComponent,
    SexPopComponent,
    TimePopComponent
  ],
  exports: [
    BookModalComponent,
    HomePopComponent,
    SexPopComponent,
    SlidesComponent,
    TimePopComponent,
  ]
})
export class ComponentsModule { }
