import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelperProvider } from '../../providers/helper/helper';

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
  timestamp: any;
  episodes: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public helper: HelperProvider
  ) {
    this.timestamp = Math.floor(Date.now() / 1000);
    this.tvshow = navParams.get('tvshow');
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
}
