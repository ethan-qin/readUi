import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadPage } from './read';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ReadPage,
  ],
  imports: [
    PipesModule,
    ComponentsModule,
    IonicPageModule.forChild(ReadPage),
  ],
})
export class ReadPageModule {}
