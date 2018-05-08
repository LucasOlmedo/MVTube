import { Component, ViewChild } from '@angular/core';
import { FILTER } from '../../constants/api.constants';
import { AnimeDetailPage } from '../anime-detail/anime-detail';
import { FilterModalPage } from '../filter-modal/filter-modal';
import { SettingsProvider } from '../../providers/settings/settings';
import { PopcornApiProvider } from '../../providers/popcorn-api/popcorn-api';
import { IonicPage, NavController, NavParams, ModalController, ViewController, Content } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-animes',
  templateUrl: 'animes.html',
})
export class AnimesPage {

  @ViewChild(Content) content: Content;
  page: any;
  animes: any;
  timestamp: any;
  singleAnime: any;
  selectedTheme: any;
  search = {
    sort: '',
    genre: '',
    order: '-1',
  };
  doScroll: boolean = true;
  searchbar: boolean = false;

  constructor(
    public navParams: NavParams,
    private view: ViewController,
    public navCtrl: NavController,
    private modal: ModalController,
    private settings: SettingsProvider,
    private apiProvider: PopcornApiProvider,
  ) {
    this.page = 1;
    this.animes = navParams.get('animes');
    this.timestamp = Math.floor(Date.now() / 1000);
    this.settings.getActiveTheme()
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

  toogleSearch() {
    this.searchbar = !this.searchbar;
    this.content.resize();
  }

  filterByKeyword($event) {
    let key = $event.target.value;
    this.apiProvider.getWithFilter(
      1,
      'animes',
      this.search.sort,
      this.search.genre,
      this.search.order,
      key
    )
      .subscribe(response => {
        if ($event.target.value == '') {
          this.doScroll = true;
          this.page = 1;
        } else {
          this.doScroll = false;
          this.view.getContent().scrollToTop();
        }
        if ($event instanceof MouseEvent) {
          this.doScroll = true;
          this.page = 1;
        }
        this.animes = response;
      });
  }
}
