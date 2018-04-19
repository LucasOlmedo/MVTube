import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HelperProvider {

  constructor(public http: HttpClient) {

  }

  formatGenre(gen, array) {
    array.length > 1
      && array.indexOf(gen)
      != array.length - 1
      ? gen = `${gen}, ` : gen = `${gen}`;
    return gen;
  }

  transformRating(pct, star: any) {
    if (pct > 0) {
      if (pct <= 10) {
        star.one = 'star-half';
        star.two = 'star-outline';
        star.three = 'star-outline';
        star.four = 'star-outline';
        star.five = 'star-outline';
      }
      if (pct >= 20 && pct < 40) {
        star.one = 'star';
        star.two = 'star-half';
        star.three = 'star-outline';
        star.four = 'star-outline';
        star.five = 'star-outline';
      }
      if (pct >= 40 && pct < 60) {
        star.one = 'star';
        star.two = 'star';
        star.three = 'star-half';
        star.four = 'star-outline';
        star.five = 'star-outline';
      }
      if (pct >= 60 && pct < 80) {
        star.one = 'star';
        star.two = 'star';
        star.three = 'star';
        star.four = 'star-half';
        star.five = 'star-outline';
      }
      if (pct >= 80 && pct < 100) {
        star.one = 'star';
        star.two = 'star';
        star.three = 'star';
        star.four = 'star';
        star.five = 'star-half';
      }
      if (pct >= 100) {
        star.one = 'star';
        star.two = 'star';
        star.three = 'star';
        star.four = 'star';
        star.five = 'star';
      }
    } else {
      star.one = 'star-outline';
      star.two = 'star-outline';
      star.three = 'star-outline';
      star.four = 'star-outline';
      star.five = 'star-outline';
    }

    return star;
  }
}
