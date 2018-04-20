import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../constants/api.constants';

@Injectable()
export class PopcornApiProvider {

  private url: string;
  private headers;

  constructor(
    private http: HttpClient
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

}
