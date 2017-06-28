import { Component } from '@angular/core';
import { NavController , NavParams  } from 'ionic-angular';
import { HomeService } from '../server/home.service';

@Component({
  templateUrl: 'collect.html',
  providers: [HomeService]
})
export class CollectPage {
  items = [];
  constructor(params: NavParams ,public navCtrl: NavController,homeService: HomeService) {
    this.items = homeService.getHomeData();
  }

  goBack() {
    this.navCtrl.pop();
  }

}
