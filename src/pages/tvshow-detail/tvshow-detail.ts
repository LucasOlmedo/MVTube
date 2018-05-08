import { Component } from '@angular/core';
import { WEBSITE } from '../../constants/api.constants';
import { HelperProvider } from '../../providers/helper/helper';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';

@IonicPage()
@Component({
  selector: 'page-tvshow-detail',
  templateUrl: 'tvshow-detail.html',
})
export class TvshowDetailPage {

  tvshow: any;
  star: any = {
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
  };
  episodes: any;
  timestamp: any;

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    public helper: HelperProvider,
    private settings: SettingsProvider,
  ) {
    this.tvshow = navParams.get('tvshow');
    this.timestamp = Math.floor(Date.now() / 1000);
    this.star = this.helper.transformRating(this.tvshow.rating.percentage, this.star);
    this.episodes = this.groupEpisodesBySeason(
      this.tvshow.episodes,
      this.tvshow.num_seasons
    );
  }

  formatGenre(gen, array) {
    return this.helper.formatGenre(gen, array)
  }

  formatExtraInfo(item: any) {
    return (item.network ? item.network + ': ' : ' - ')
      + (item.air_day ? item.air_day + ', ' : ' - ')
      + (item.air_time ? item.air_time : ' - ');
  }

  groupEpisodesBySeason(ep, se) {
    if (ep && se) {
      var formatted: any = [];
      for (let index = 1; index <= se; index++) {
        formatted.push({
          season: index,
          list: ep.filter(item => item.season == index)
        });
      }
      return formatted;
    }
  }

  downloadImage(url) {
    this.helper.downloadImage(url);
  }

  shareItem(tvshow) {
    let title = this.settings.instantTranslate('SHARING.TVSHOW_TITLE');
    let image = `${tvshow.images.fanart}?${this.timestamp}`;
    let message = `${tvshow.title}\n(${tvshow.year} - ${tvshow.runtime} min)\n\n${tvshow.synopsis}\n\n${title}\n${WEBSITE}`;
    this.helper.share(
      message,
      title,
      image
    );
  }

}
