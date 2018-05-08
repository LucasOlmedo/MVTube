import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  appVersion = { value: '1.0.0' };
  developer = { value: 'Lucas Olmedo' };

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
  ) {
    
  }

}
