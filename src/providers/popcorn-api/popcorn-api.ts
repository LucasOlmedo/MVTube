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
    
  }

}
