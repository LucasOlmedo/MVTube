import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileTransfer, FileUploadOptions, FileTransferObject } from "@ionic-native/file-transfer";
import { File } from "@ionic-native/file";

@Injectable()
export class HelperProvider {

  fileTransfer: FileTransferObject;
  timestamp: any;

  constructor(
    public httpClient: HttpClient,
    private transfer: FileTransfer,
    private file: File
  ) {
    this.fileTransfer = transfer.create();
  }

  download(imageUrl) {
    this.timestamp = Math.floor(Date.now() / 1000);
    return this.fileTransfer.download(
      imageUrl, 
      this.file.externalRootDirectory + `/Download/movie_wallpaper_${this.timestamp}.jpg`
    );
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
