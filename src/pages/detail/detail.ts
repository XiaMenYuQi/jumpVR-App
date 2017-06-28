import { Component } from '@angular/core';
import { NavController , NavParams  } from 'ionic-angular';

declare var initLoad;
@Component({
  templateUrl: 'detail.html'
})
export class DetailPage {
  item;

  constructor(params: NavParams ,public navCtrl: NavController) {
    this.item = params.data.item;

  }

  ngOnInit() {
    var src = this.item.src;
    /*播放器参数配置*/
    var paramsPlay = {
      container: document.getElementById("pano"),
      name: "SceneViewer",
      scenesArr: [
        //todo:注意修改视频路径，需要保证播放页面与视频属于同一域名下
        {sceneId: "v1", sceneName: "赛车", sceneFilePath: src , sceneType: "Video"}
      ],
      //播放器不支持全景播放回调
      errorCallBack: function (e) {
        console.log("错误状态：" + e);
      },
      //浏览器不支持全屏回调
      fsCallBack: function (status, playObj) {
        alert("浏览器不支持全屏！");
      }
    };
    initLoad(paramsPlay);
  }

  goBack() {
    this.navCtrl.pop();
  }
}
