import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopcornApiProvider } from '../../providers/popcorn-api/popcorn-api';

@IonicPage()
@Component({
  selector: 'page-animes',
  templateUrl: 'animes.html',
})
export class AnimesPage {

  animes: any;
  singleAnime: any;
  page: any;
  timestamp: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private apiProvider: PopcornApiProvider
  ) {
    this.animes = navParams.get('animes');
    this.page = 1;
    this.timestamp = Math.floor(Date.now() / 1000);
  }

  getAnimeDetails(id) {
    this.apiProvider.animeDetail(id)
      .subscribe(response => {
        this.singleAnime = response;
        // this.navCtrl.push(MovieDetailPage, {
        //   movie: this.singleMovie
        // });
      });
  }

  doInfinite($scroll) {
    setTimeout(() => {
      this.page++;
      this.apiProvider.getAnimes(this.page)
        .subscribe((response: any) => {
          for (let index = 0; index < response.length; index++) {
            let element = response[index];
            this.animes.push(element);
          }
          $scroll.complete();
        })
    }, 700);
  }

}
