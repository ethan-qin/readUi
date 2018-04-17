import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImgPreviewDetailsPage } from './img-preview-details';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ImgPreviewDetailsPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(ImgPreviewDetailsPage),
  ],
})
export class ImgPreviewDetailsPageModule {}
