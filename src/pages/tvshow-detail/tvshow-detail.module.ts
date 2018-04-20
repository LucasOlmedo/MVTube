import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TvshowDetailPage } from './tvshow-detail';

@NgModule({
  declarations: [
    TvshowDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TvshowDetailPage),
  ],
})
export class TvshowDetailPageModule {}
