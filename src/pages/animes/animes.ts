import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { PopcornApiProvider } from '../../providers/popcorn-api/popcorn-api';
import { AnimeDetailPage } from '../anime-detail/anime-detail';
import { HomePage } from '../home/home';
import { FilterModalPage } from '../filter-modal/filter-modal';
import { SettingsProvider } from '../../providers/settings/settings';
import { FILTER } from '../../constants/api.constants';

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
    this.animes = navParams.get('animes');
    this.page = 1;
    this.timestamp = Math.floor(Date.now() / 1000);
    settings.getActiveTheme()
      .subscribe(theme => this.selectedTheme = theme);
  }

  getAnimeDetails(id) {
    this.apiProvider.animeDetail(id)
      .subscribe(response => {
        this.singleAnime = response;
        this.navCtrl.push(AnimeDetailPage, {
          anime: this.singleAnime
        });
      });
  }

  doInfinite($scroll) {
    setTimeout(() => {
      this.page++;
      this.apiProvider.getWithFilter(
        this.page,
        'animes',
        this.search.sort,
        this.search.genre,
        this.search.order
      )
        .subscribe((response: any) => {
          for (let index = 0; index < response.length; index++) {
            let element = response[index];
            this.animes.push(element);
          }
          $scroll.complete();
        })
    }, 700);
  }

  filterAnime() {
    let modalFilter = this.modal.create(FilterModalPage, {
      theme: this.selectedTheme,
      filter: {
        genre: FILTER.genre.anime,
        sort: FILTER.sort.anime,
        order: FILTER.order
      },
      search: this.search,
      endpoint: 'animes'
    });

    modalFilter.onDidDismiss(data => {
      if (data != null) {
        this.animes = data.obj;
        this.search = data.search;
        this.page = 1;
        this.view.getContent().scrollToTop();
      }
    });

    modalFilter.present();
  }

}
