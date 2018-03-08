import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScoreRankPage } from './score-rank';

@NgModule({
  declarations: [
    ScoreRankPage,
  ],
  imports: [
    IonicPageModule.forChild(ScoreRankPage),
  ],
})
export class ScoreRankPageModule {}
