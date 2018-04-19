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

  public getMovies() {
    return this.http.get(this.url + 'movies/1');
  }

  public movieDetail(id) {
    return this.http.get(this.url + 'movie/' + id);
  }

  public getTvShows() {
    return this.http.get(this.url + 'shows/1');
  }

  public getAnimes() {
    return this.http.get(this.url + 'animes/1');
  }

}
