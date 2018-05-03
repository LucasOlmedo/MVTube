import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { PopcornApiProvider } from '../../providers/popcorn-api/popcorn-api';
import { TvshowDetailPage } from '../tvshow-detail/tvshow-detail';
import { HomePage } from '../home/home';
import { SettingsProvider } from '../../providers/settings/settings';
import { FILTER } from '../../constants/api.constants';

@IonicPage()
@Component({
  selector: 'page-tvshows',
  templateUrl: 'tvshows.html',
})
export class TvshowsPage {

  tvshows: any;
  singleShow: any;
  page: any;
  timestamp: any;
  selectedTheme: any;
  search = {
    genre: '',
    sort: '',
    order: '-1',
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private apiProvider: PopcornApiProvider,
    private modal: ModalController,
    private settings: SettingsProvider,
    private view: ViewController
  ) {
    this.tvshows = navParams.get('tvshows');
    this.page = 1;
    this.timestamp = Math.floor(Date.now() / 1000);
    settings.getActiveTheme()
      .subscribe(theme => this.selectedTheme = theme);
  }

  getTvShowDetails(id) {
    this.apiProvider.tvShowDetail(id)
      .subscribe(response => {
        this.singleShow = response;
        this.navCtrl.push(TvshowDetailPage, {
          tvshow: this.singleShow
        });
      });
  }

  doInfinite($scroll) {
    setTimeout(() => {
      this.page++;
      this.apiProvider.getTvShows(this.page)
        .subscribe((response: any) => {
          for (let index = 0; index < response.length; index++) {
            let element = response[index];
            this.tvshows.push(element);
          }
          $scroll.complete();
        })
    }, 700);
  }

  filterShow() {
    let modalFilter = this.modal.create(FilterModal, {
      theme: this.selectedTheme,
      filter: FILTER,
      search: this.search
    });

    modalFilter.onDidDismiss(data => {
      if (data != null) {
        this.tvshows = data.tvshows;
        this.search = data.search;
        this.page = 1;
        this.view.getContent().scrollToTop();
      }
    });

    modalFilter.present();
  }

}

@Component({
  selector: 'filter-tvshows',
  templateUrl: 'filter.html'
})
export class FilterModal {

  theme: any;
  filter: any;
  search = {
    genre: '',
    sort: '',
    order: '-1',
  };
  movies: any = null;

  constructor(
    params: NavParams,
    private view: ViewController,
    private settings: SettingsProvider,
    private api: PopcornApiProvider,
  ) {
    this.theme = params.data.theme;
    this.filter = params.data.filter;
    this.search = params.data.search;
  }

  applyFilters() {
    this.api.getWithFilter(
      1,
      'tvshows',
      this.search.sort,
      this.search.genre,
      this.search.order
    )
      .subscribe(response => {
        this.movies = response
        this.view.dismiss({
          movies: this.movies,
          search: this.search
        });
      });
  }

  resetFilters() {
    this.search = {
      genre: '',
      sort: '',
      order: '-1',
    };
  }

  dismiss() {
    this.view.dismiss();
  }

}
