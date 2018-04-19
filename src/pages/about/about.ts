import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  developer = { value: 'Lucas Olmedo' };
  appVersion = { value: '1.0.0' };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    
  }

}
