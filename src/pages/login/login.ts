import { Component } from '@angular/core';
import { NavController , NavParams ,ToastController  } from 'ionic-angular';

@Component({
  templateUrl: 'login.html'
})
export class LoginPage {
  user: '';
  password : '';
  constructor(
    params: NavParams ,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
  ) {

  }
  Login(){
    let _this = this;
    if(_this.user == undefined || _this.user == ''){
      let toast = this.toastCtrl.create({
        message: '请输入用户名',
        duration: 3000
      });
      toast.present();
      return false;
    }
    if(_this.password == undefined || _this.password == ''){
      let toast = this.toastCtrl.create({
        message: '请输入密码',
        duration: 3000
      });
      toast.present();
      return false;
    }
    window.localStorage['user'] = _this.user;
    this.navCtrl.pop();
  }
  goBack() {
    this.navCtrl.pop();
  }
}
