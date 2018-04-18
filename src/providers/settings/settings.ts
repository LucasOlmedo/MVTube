import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';

@Injectable()
export class SettingsProvider {

  private theme: BehaviorSubject<String> = new BehaviorSubject('light-theme');

  constructor(
    private storage: Storage
  ) {
    this.initSetting();
  }

  private initSetting() {
    this.storage.get('theme')
      .then(value => {
        value != null
          ? this.theme.next(value)
          : this.storage.set('theme', 'light-theme');
      });
  }

  public setActiveTheme(val) {
    this.storage.set('theme', val)
      .then(value => this.theme.next(value));
  }

  public getActiveTheme() {
    return this.theme.asObservable();
  }

}
