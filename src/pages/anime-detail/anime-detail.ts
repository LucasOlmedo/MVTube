import { Component } from '@angular/core';
import { WEBSITE } from '../../constants/api.constants';
import { HelperProvider } from '../../providers/helper/helper';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';

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
  episodes: any;
  timestamp: any;
  animeimage: string;
  favorite: boolean = false;

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
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
    this.settings.getAllFavorites('animes')
      .then(response => {
        if (response != null) {
          let match = response.filter(item => item._id == this.anime._id);
          if (match.length > 0) {
            this.favorite = true;
          } else {
            this.favorite = false;
          }
        }
      });
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
    let image = this.animeimage;
    let title = this.settings.instantTranslate('SHARING.ANIME_TITLE');
    let message = `${anime.title}\n(${anime.year} - ${anime.runtime} min)\n\n${anime.synopsis}\n\n${title}\n${WEBSITE}`;
    this.helper.share(
      message,
      title,
      image
    );
  }

  toggleFavorite(anime) {
    if (this.favorite) {
      this.unfavoriteItem(anime)
    } else {
      this.favoriteItem(anime);
    }
  }

  public favoriteItem(item) {
    this.settings.getAllFavorites('animes')
      .then(response => {
        if (response != null) {
          let match = response.filter(value => value._id == item._id);
          if (match.length == 0) {
            response.push(item);
            this.settings.setFavorites('animes', response)
              .then(() => {
                this.favorite = true;
              });
          } else {
            this.favorite = true;
          }
        } else {
          let favorites = [];
          favorites.push(item);
          this.settings.setFavorites('animes', favorites)
            .then(() => {
              this.favorite = true;
            });
        }
      });
  }

  public unfavoriteItem(item) {
    this.settings.getAllFavorites('animes')
      .then(response => {
        let match = response.filter(value => value._id == item._id);
        if (match.length > 0) {
          let mapped = response.filter(map => map._id != item._id);
          this.settings.setFavorites('animes', mapped)
            .then(() => {
              this.favorite = false;
            });
        } else {
          this.favorite = false;
        }
      });
  }
}
