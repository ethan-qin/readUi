import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { BookModalComponent } from './book-modal/book-modal';
import { HomePopComponent } from './home-pop/home-pop';
import { SexPopComponent } from './sex-pop/sex-pop';
import { SlidesComponent } from './slides/slides';
import { TimePopComponent } from './time-pop/time-pop';
import { BookListHorizontalComponent } from './book-list-horizontal/book-list-horizontal';
import { BookListVerticalComponent } from './book-list-vertical/book-list-vertical';
import { BookListSlidesComponent } from './book-list-slides/book-list-slides';
import { BookListRankComponent } from './book-list-rank/book-list-rank';
import { BookClassificationSearchComponent } from './book-classification-search/book-classification-search';

@NgModule({
  declarations: [
    BookModalComponent,
    HomePopComponent,
    SexPopComponent,
    SlidesComponent,
    TimePopComponent,
    BookListHorizontalComponent,
    BookListVerticalComponent,
    BookListSlidesComponent,
    BookListRankComponent,
    BookClassificationSearchComponent,
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
    BookListSlidesComponent,
    BookListRankComponent,
    BookClassificationSearchComponent,
  ]
})
export class ComponentsModule { }
