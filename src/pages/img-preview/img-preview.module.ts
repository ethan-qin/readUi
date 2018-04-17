import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImgPreviewPage } from './img-preview';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ImgPreviewPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(ImgPreviewPage),
  ],
})
export class ImgPreviewPageModule {}
