import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";

import { BookAbstractPage } from "./book-abstract";
import { RatingComponent } from "../../components/rating/rating";
import { PipesModule } from "../../pipes/pipes.module";

@NgModule({
  declarations: [BookAbstractPage, RatingComponent],
  imports: [PipesModule, IonicPageModule.forChild(BookAbstractPage)],
  exports: [RatingComponent]
})
export class BookAbstractPageModule {}
