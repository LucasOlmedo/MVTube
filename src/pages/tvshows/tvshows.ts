import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopcornApiProvider } from '../../providers/popcorn-api/popcorn-api';

@IonicPage()
@Component({
  selector: 'page-tvshows',
  templateUrl: 'tvshows.html',
})
export class TvshowsPage {

  tvshows: any;
  singleShow: any;
  page: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private apiProvider: PopcornApiProvider
  ) {
    this.tvshows = navParams.get('tvshows');
    this.page = 1;
  }

  getTvShowDetails(id) {
    this.apiProvider.tvShowDetail(id)
      .subscribe(response => {
        this.singleShow = response;
        // this.navCtrl.push(MovieDetailPage, {
        //   movie: this.singleMovie
        // });
      });
  }

  doInfinite($scroll) {
    setTimeout(() => {
      this.page++;
      this.apiProvider.getMovies(this.page)
        .subscribe((response: any) => {
          for (let index = 0; index < response.length; index++) {
            let element = response[index];
            this.tvshows.push(element);
          }
          $scroll.complete();
        })
    }, 700);
  }

}
