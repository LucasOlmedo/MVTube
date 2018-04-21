import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelperProvider } from '../../providers/helper/helper';

@IonicPage()
@Component({
  selector: 'page-anime-detail',
  templateUrl: 'anime-detail.html',
})
export class AnimeDetailPage {

  anime: any;
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
    private helper: HelperProvider
  ) {
    this.timestamp = Math.floor(Date.now() / 1000);
    this.anime = navParams.get('anime');
    this.star = this.helper.transformRating(this.anime.rating.percentage, this.star);
    this.episodes = this.groupEpisodesBySeason(
      this.anime.episodes,
      this.anime.num_seasons
    );
  }

  formatGenre(gen, array) {
    return this.helper.formatGenre(gen, array)
  }

  groupEpisodesBySeason(ep, se) {
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
