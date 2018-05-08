import { File } from "@ionic-native/file";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsProvider } from '../settings/settings';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ActionSheetController, ToastController } from 'ionic-angular';
import { FileTransfer, FileTransferObject } from "@ionic-native/file-transfer";

@Injectable()
export class HelperProvider {

  timestamp: any;
  fileTransfer: FileTransferObject;

  constructor(
    private file: File,
    public httpClient: HttpClient,
    private social: SocialSharing,
    private transfer: FileTransfer,
    private toast: ToastController,
    private settings: SettingsProvider,
    private actionSheet: ActionSheetController,
  ) {
    this.fileTransfer = this.transfer.create();
  }

  download(imageUrl) {
    this.timestamp = Math.floor(Date.now() / 1000);
    return this.fileTransfer.download(
      imageUrl,
      this.file.externalRootDirectory + `/Download/${this.timestamp}.jpg`
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

  downloadImage(url) {
    let action = this.actionSheet.create({
      title: this.settings.instantTranslate('DOWNLOAD_WALLPAPER.TITLE'),
      buttons: [
        {
          text: this.settings.instantTranslate('DOWNLOAD_WALLPAPER.DOWNLOAD'),
          icon: 'download',
          handler: () => {
            this.download(url)
              .then(result => {
                let toast = this.toast.create({
                  message: this.settings
                    .instantTranslate('DOWNLOAD_WALLPAPER.DOWNLOAD_SUCCESS')
                    + 'Download/' + result.name,
                  duration: 2600,
                  position: 'bottom'
                });
                toast.present();
              })
              .catch(result => {
                let toast = this.toast.create({
                  message: this.settings
                    .instantTranslate('DOWNLOAD_WALLPAPER.DOWNLOAD_ERROR'),
                  duration: 2600,
                  position: 'bottom'
                });
                toast.present();
              });
          }
        },
        {
          text: this.settings.instantTranslate('DOWNLOAD_WALLPAPER.SHARE'),
          icon: 'share',
          cssClass: 'btn-share-image',
          handler: () => {
            this.social.share(null, null, url);
          }
        },
        {
          text: this.settings.instantTranslate('DOWNLOAD_WALLPAPER.CANCEL'),
          icon: 'close',
          cssClass: 'btn-cancel-download',
        }
      ]
    });
    action.present();
  }

  share(message, title, image) {
    return this.social.share(
      message,
      title,
      image
    );
  }

}
