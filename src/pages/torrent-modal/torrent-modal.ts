import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SUBTITLE_LANG } from '../../constants/api.constants';
import { SettingsProvider } from '../../providers/settings/settings';

@IonicPage()
@Component({
  selector: 'page-torrent-modal',
  templateUrl: 'torrent-modal.html',
})
export class TorrentModalPage {

  flag: any;
  theme: any;
  torrents: any;
  selectedTorrent: any;
  selectedSubtitle: any;
  torrentInfo: string = '';
  subInfo: string = '';
  subtitles: any = SUBTITLE_LANG;

  constructor(
    params: NavParams,
    domSanitizer: DomSanitizer,
    private view: ViewController,
    private settings: SettingsProvider,
  ) {
    this.theme = params.get('theme');
    this.torrents = [
      {
        quality: '720p',
        obj: params.get('720p')
      },
      {
        quality: '1080p',
        obj: params.get('1080p')
      }
    ];
    this.setTorrent('720p');
    this.settings.getActiveLang().then(lang => this.setSubtitle(lang));
    this.setSubtitle('en');
  }

  setTorrent($event) {
    let selected = this.torrents.filter(item => item.quality == $event);
    this.torrentInfo = `${this.settings.instantTranslate('TORRENT_PAGE.QUALITY')}: ${$event} - ${selected[0].obj.filesize}`;
  }

  setSubtitle($event) {
    let selected = this.subtitles.filter(item => item.code == $event);
    this.selectedSubtitle = selected[0].code;
    this.flag = selected[0].flag;
    this.subInfo = `${this.settings.instantTranslate('TORRENT_PAGE.SUBTITLE')}: ${selected[0].lang}`;
  }

  dismiss() {
    this.view.dismiss();
  }
}
