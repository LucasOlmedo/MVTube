import { Component, ViewChild, Renderer, Input } from '@angular/core';
import { NavParams, ViewController, PopoverController } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';

@Component({
  selector: 'episodes',
  templateUrl: 'episodes.html'
})
export class EpisodesComponent {

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

  toggleCard() {

    if (this.expanded) {
      this.render.setElementStyle(
        this.cardContent.nativeElement,
        'max-height',
        '0'
      );
    } else {
      this.render.setElementStyle(
        this.cardContent.nativeElement,
        'max-height',
        this.cardContent.nativeElement.scrollHeight + 'px'
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