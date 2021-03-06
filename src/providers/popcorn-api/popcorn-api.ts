import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { API_URL } from '../../constants/api.constants';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class PopcornApiProvider {

  private headers;
  private url: string;
  private timestamp: any;

  constructor(
    private http: HttpClient,
    private storage: Storage,
  ) {
    this.url = API_URL;
  }

  public getMovies(page) {
    return this.http.get(this.url + 'movies/' + page);
  }

  public getTvShows(page) {
    return this.http.get(this.url + 'shows/' + page);
  }

  public getAnimes(page) {
    return this.http.get(this.url + 'animes/' + page);
  }

  public movieDetail(id) {
    return this.http.get(this.url + 'movie/' + id);
  }

  public tvShowDetail(id) {
    return this.http.get(this.url + 'show/' + id);
  }

  public animeDetail(id) {
    return this.http.get(this.url + 'anime/' + id);
  }

  public random(random) {
    this.timestamp = Math.floor(Date.now() / 1000);
    return this.http.get(this.url + 'random/' + random + '?t=' + this.timestamp);
  }

  public getWithFilter(page, endpoint, sort, genre, order = '-1', keywords = null) {
    let params = new URLSearchParams;

    if (sort != null)
      params.set('sort', sort);

    if (order != null)
      params.set('order', order);

    if (genre != null)
      params.set('genre', genre);

    if (keywords != null)
      params.set('keywords', keywords);

    return this.http.get(`${this.url}${endpoint}/${page}?` + params.toString());
  }

}
