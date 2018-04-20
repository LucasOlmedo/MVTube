import { Component, ViewChild, OnInit, Renderer, Input } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'episodes',
  templateUrl: 'episodes.html'
})
export class EpisodesComponent implements OnInit {

  @Input() episodes: any;
  @ViewChild("cardContent") cardContent: any;
  expanded: boolean;

  constructor(
    private render: Renderer,
    public navParams: NavParams
  ) {
    this.expanded = false;
  }

  ngOnInit() {
    this.render.setElementStyle(
      this.cardContent.nativeElement, 
      'transition',
      'max-height 400ms, padding 400ms'
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
        '0px 15px'
      );
    } else {
      this.render.setElementStyle(
        this.cardContent.nativeElement,
        'max-height',
        '250px'
      );
      this.render.setElementStyle(
        this.cardContent.nativeElement,
        'padding',
        '10px 15px'
      );
    }

    this.expanded = !this.expanded;
  }

}
