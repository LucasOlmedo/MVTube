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
    this.settings.getAllFavorites()
      .then(response => {
        console.log(response);
        if (response != null) {
          let match = response.filter(item => item == this.movie._id);
          if (match) {
            this.favorite = true;
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

  favoriteItem(movie) {
    if (this.favorite) {
      this.settings.removeFavorite(movie._id)
        .then(() => {
          this.favorite = false;
        });
    } else {
      this.settings.setFavorites(movie._id, movie)
        .then(() => {
          this.favorite = true;
        });
    }
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
