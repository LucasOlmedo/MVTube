import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TorrentModalPage } from './torrent-modal';

@NgModule({
  declarations: [
    TorrentModalPage,
  ],
  imports: [
    IonicPageModule.forChild(TorrentModalPage),
  ],
})
export class TorrentModalPageModule {}
