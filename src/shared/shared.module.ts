import { NgModule } from '@angular/core';

import { PersonBookInfo } from './book.model';

@NgModule({
  imports: [
    PersonBookInfo
  ],
  providers: [

  ],
  exports: [
    PersonBookInfo
  ]
})
export class SharedModule { }
