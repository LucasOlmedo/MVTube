import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TvshowsPage } from './tvshows';

@NgModule({
  declarations: [
    TvshowsPage,
  ],
  imports: [
    IonicPageModule.forChild(TvshowsPage),
  ],
})
export class TvshowsPageModule {}
