import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestPage } from './test';

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
