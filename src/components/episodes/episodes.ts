import { Component, ViewChild, OnInit, Renderer, Input } from '@angular/core';
import { NavParams, ViewController, PopoverController } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';

@Component({
  selector: 'episodes',
  templateUrl: 'episodes.html'
})
export class EpisodesComponent implements OnInit {

  @Input() episode: any;
  @ViewChild("cardContent") cardContent: any;
  expanded: boolean;
  selectedTheme: any;

  constructor(
    private render: Renderer,
    public navParams: NavParams,
    private popover: PopoverController,
    private settings: SettingsProvider
  ) {
    this.expanded = false;
    this.settings.getActiveTheme()
      .subscribe(value => this.selectedTheme = value);
  }

  ngOnInit() {
    this.render.setElementStyle(
      this.cardContent.nativeElement,
      'transition',
      'max-height 450ms, padding 300ms'
    );
  }

  toggleCard() {

    if (this.expanded) {
      this.render.setElementStyle(
        this.cardContent.nativeElement,
        'max-height',
        '0px'
      );
      this.render.setElementStyle(
        this.cardContent.nativeElement,
        'padding',
        '0px 10px'
      );
    } else {
      this.render.setElementStyle(
        this.cardContent.nativeElement,
        'max-height',
        '3400px'
      );
      this.render.setElementStyle(
        this.cardContent.nativeElement,
        'padding',
        '5px 10px'
      );
    }

    this.expanded = !this.expanded;
  }

  episodeInfo(episode) {
    let pop = this.popover.create(EpisodeDetails, {
      description: episode.overview,
      title: episode.title,
      theme: this.selectedTheme
    });
    pop.present();
  }

}

@Component({
  template: `
  <div #popover [class]="theme">
    <ion-header>
      <ion-toolbar padding class="episode-info-title">
        <ion-col>
          <strong>{{title}}</strong>
        </ion-col>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-grid padding>
        <ion-row>
          <ion-col>
            {{description}}
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </div>
  `
})
export class EpisodeDetails {

  description: any;
  title: string;
  theme: any;

  constructor(
    public viewCtrl: ViewController,
    private navParams: NavParams
  ) {
    this.description = navParams.data.description;
    this.title = navParams.data.title;
    this.theme = navParams.data.theme;
  }
}