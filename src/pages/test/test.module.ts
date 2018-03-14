import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestPage } from './test';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TestPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(TestPage),
  ],
})
export class TestPageModule {}
