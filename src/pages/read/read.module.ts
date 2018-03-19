import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadPage } from './read';

@NgModule({
  declarations: [
    ReadPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(ReadPage),
  ],
})
export class ReadPageModule {}
