import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { BookModalComponent } from './book-modal/book-modal';
import { HomePopComponent } from './home-pop/home-pop';
import { SexPopComponent } from './sex-pop/sex-pop';
import { SlidesComponent } from './slides/slides';
import { TimePopComponent } from './time-pop/time-pop';
import { BookListHorizontalComponent } from './book-list-horizontal/book-list-horizontal';
import { BookListVerticalComponent } from './book-list-vertical/book-list-vertical';

@NgModule({
  declarations: [
    BookModalComponent,
    HomePopComponent,
    SexPopComponent,
    SlidesComponent,
    TimePopComponent,
    BookListHorizontalComponent,
    BookListVerticalComponent,
  ],
  imports: [
    IonicModule,
  ],
  entryComponents: [
    BookModalComponent,
    HomePopComponent,
    SexPopComponent,
    TimePopComponent,
  ],
  exports: [
    BookModalComponent,
    HomePopComponent,
    SexPopComponent,
    SlidesComponent,
    TimePopComponent,
    BookListHorizontalComponent,
    BookListVerticalComponent,
  ]
})
export class ComponentsModule { }
