import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelperProvider } from '../../providers/helper/helper';
import { SettingsProvider } from '../../providers/settings/settings';
import { WEBSITE } from '../../constants/api.constants';

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
  animeimage: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private helper: HelperProvider,
    private settings: SettingsProvider
  ) {
    this.timestamp = Math.floor(Date.now() / 1000);
    this.anime = navParams.get('anime');
    this.star = this.helper.transformRating(this.anime.rating.percentage, this.star);
    this.episodes = this.groupEpisodesBySeason(
      this.anime.episodes,
      this.anime.num_seasons
    );
    this.animeimage = `https://media.kitsu.io/anime/cover_images/${this.anime._id}/original.jpg?${this.timestamp}`;
  }

  formatGenre(gen, array) {
    return this.helper.formatGenre(gen, array)
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

  shareItem(anime) {
    let title = this.settings.instantTranslate('SHARING.ANIME_TITLE');
    let image = this.animeimage;
    let message = `${anime.title}\n(${anime.year} - ${anime.runtime} min)\n\n${anime.synopsis}\n\n${title}\n${WEBSITE}`;
    this.helper.share(
      message,
      title,
      image
    );
  }

}
