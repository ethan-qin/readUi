import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassificationItemPage } from './classification-item';

@NgModule({
  declarations: [
    ClassificationItemPage,
  ],
  imports: [
    IonicPageModule.forChild(ClassificationItemPage),
    ComponentsModule
  ],
})
export class ClassificationItemPageModule {}
