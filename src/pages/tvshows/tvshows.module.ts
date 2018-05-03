import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TvshowsPage, FilterModal } from './tvshows';

@NgModule({
  declarations: [
    TvshowsPage,
    FilterModal
  ],
  imports: [
    IonicPageModule.forChild(TvshowsPage),
  ],
})
export class TvshowsPageModule {}
