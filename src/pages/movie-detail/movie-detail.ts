import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { HelperProvider } from '../../providers/helper/helper';
import { DomSanitizer } from '@angular/platform-browser';
import { SettingsProvider } from '../../providers/settings/settings';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private helper: HelperProvider,
    private modal: ModalController,
    private settings: SettingsProvider
  ) {
    this.timestamp = Math.floor(Date.now() / 1000);
    this.movie = this.navParams.get('movie');
    this.star = this.helper.transformRating(this.movie.rating.percentage, this.star);
    this.settings.getActiveTheme()
      .subscribe(value => this.selectedTheme = value);
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
    this.helper.download(url);
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
    private view: ViewController,
    domSanitizer: DomSanitizer
  ) {
    this.url = domSanitizer.bypassSecurityTrustResourceUrl(params.get('url'));
    this.theme = params.get('theme');
  }

  dismiss() {
    this.view.dismiss();
  }

}
