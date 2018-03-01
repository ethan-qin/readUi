import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ComponentsModule } from './../../components/components.module';
import { ListMorePage } from './list-more';

@NgModule({
  declarations: [
    ListMorePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ListMorePage),
  ],
})
export class ListMorePageModule { }
