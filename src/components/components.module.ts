import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { BookModalComponent } from './book-modal/book-modal';
import { BookClassificationSearchComponent } from './book-classification-search/book-classification-search';
import { BookListHorizontalComponent } from './book-list-horizontal/book-list-horizontal';
import { BookListVerticalComponent } from './book-list-vertical/book-list-vertical';
import { BookListSlidesComponent } from './book-list-slides/book-list-slides';
import { HomePopComponent } from './home-pop/home-pop';
import { PipesModule } from './../pipes/pipes.module';
import { SexPopComponent } from './sex-pop/sex-pop';
import { SlidesComponent } from './slides/slides';
import { TimePopComponent } from './time-pop/time-pop';
import { SearchCheckboxComponent } from './search-checkbox/search-checkbox';
import { SearchRadioComponent } from './search-radio/search-radio';
import { SearchFiltrateComponent } from './search-filtrate/search-filtrate';
import { BookItemComponent } from './book-item/book-item';
import { ScoreItemComponent } from './score-item/score-item';
import { BatteryComponent } from './battery/battery';
import { ResetAuthCodeComponent } from './reset-auth-code/reset-auth-code';


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
    BookClassificationSearchComponent,
    SearchCheckboxComponent,
    SearchRadioComponent,
    SearchFiltrateComponent,
    BookItemComponent,
    ScoreItemComponent,
    BatteryComponent,
    ResetAuthCodeComponent,
  ],
  imports: [
    PipesModule,
    IonicModule,
  ],
  entryComponents: [
    BookModalComponent,
    HomePopComponent,
    SexPopComponent,
    TimePopComponent,
    SearchCheckboxComponent,
    SearchRadioComponent,
    SearchFiltrateComponent,
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
    BookClassificationSearchComponent,
    SearchCheckboxComponent,
    SearchRadioComponent,
    SearchFiltrateComponent,
    BookItemComponent,
    ScoreItemComponent,
    BatteryComponent,
    ResetAuthCodeComponent,
  ]
})
export class ComponentsModule { }
