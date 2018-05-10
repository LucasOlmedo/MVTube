import { Component } from '@angular/core';
import { WEBSITE } from "../../constants/api.constants";
import { DomSanitizer } from '@angular/platform-browser';
import { HelperProvider } from '../../providers/helper/helper';
import { SettingsProvider } from '../../providers/settings/settings';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

  movie: any;
  star: any = {
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
  };
  timestamp: any;
  selectedTheme: any;
  favorite: boolean = false;

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    private helper: HelperProvider,
    private modal: ModalController,
    private settings: SettingsProvider,
  ) {
    this.movie = this.navParams.get('movie');
    this.timestamp = Math.floor(Date.now() / 1000);
    this.star = this.helper.transformRating(this.movie.rating.percentage, this.star);
    this.settings.getActiveTheme()
      .subscribe(value => this.selectedTheme = value);
    this.settings.getAllFavorites('movies')
      .then(response => {
        if (response != null) {
          let match = response.filter(item => item._id == this.movie._id);
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

  showTrailer(trailer: string) {
    let formatted = trailer.replace('http://youtube.com/watch?v=', 'https://www.youtube.com/embed/');
    let trailerModal = this.modal.create(TrailerModal, {
      url: formatted,
      theme: this.selectedTheme
    });
    trailerModal.present();
  }

  downloadImage(url) {
    this.helper.downloadImage(url);
  }

  shareItem(movie) {
    let image = `${movie.images.fanart}?${this.timestamp}`;
    let title = this.settings.instantTranslate('SHARING.MOVIE_TITLE');
    let message = `${movie.title}\n(${movie.year} - ${movie.runtime} min)\n\n${movie.synopsis}\n\n${title}\n${WEBSITE}`;
    this.helper.share(
      message,
      title,
      image
    );
  }

  toggleFavorite(movie) {
    if (this.favorite) {
      this.unfavoriteItem(movie)
    } else {
      this.favoriteItem(movie);
    }
  }

  public favoriteItem(item) {
    this.settings.getAllFavorites('movies')
      .then(response => {
        if (response != null) {
          let match = response.filter(value => value._id == item._id);
          if (match.length == 0) {
            response.push(item);
            this.settings.setFavorites('movies', response)
              .then(() => {
                this.favorite = true;
              });
          } else {
            this.favorite = true;
          }
        } else {
          let favorites = [];
          favorites.push(item);
          this.settings.setFavorites('movies', favorites)
            .then(() => {
              this.favorite = true;
            });
        }
      });
  }

  public unfavoriteItem(item) {
    this.settings.getAllFavorites('movies')
      .then(response => {
        let match = response.filter(value => value._id == item._id);
        if (match.length > 0) {
          let mapped = response.filter(map => map._id != item._id);
          this.settings.setFavorites('movies', mapped)
            .then(() => {
              this.favorite = false;
            });
        } else {
          this.favorite = false;
        }
      });
  }
}

@Component({
  template: `
    <div #modal [class]="theme">
      <ion-header>
        <ion-toolbar>
          <ion-title>
            Trailer
          </ion-title>
          <ion-buttons end margin-right>
            <button ion-button (click)="dismiss()">
              <ion-icon name="close"></ion-icon>
            </button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <iframe class="movie-trailer" align="middle" [src]="url" frameborder="0" allowfullscreen></iframe>
      </ion-content>
    </div>
  `
})
export class TrailerModal {

  url: any;
  theme: any;

  constructor(
    params: NavParams,
    domSanitizer: DomSanitizer,
    private view: ViewController,
  ) {
    this.theme = params.get('theme');
    this.url = domSanitizer.bypassSecurityTrustResourceUrl(params.get('url'));
  }

  dismiss() {
    this.view.dismiss();
  }
}
