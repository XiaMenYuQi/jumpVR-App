import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeService } from '../server/home.service';
import { DetailPage } from '../detail/detail';
import { LoginPage } from '../login/login'
import { UserPage } from '../user/user'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService]
})
export class HomePage {
  items = [];
  isLogin = false;
  constructor(public navCtrl: NavController , homeService: HomeService) {
    this.items = homeService.getHomeData();
  }

  ionViewDidEnter() {
    if(window.localStorage['user']==undefined || window.localStorage['user'] == ''){
      this.isLogin = false
    }else{
      this.isLogin = true
    }
  }

  goToDetailPage(item) {
    this.navCtrl.push(DetailPage, { item: item });
  }

  goToLogin(){
    this.navCtrl.push(LoginPage);
  }

  goToUser(){
    this.navCtrl.push(UserPage , {user: window.localStorage['user']});
  }
}
