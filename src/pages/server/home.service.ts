import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
  getHomeData() {
    return [
      {
        'title': '佛罗里达跳伞全程',
        'cover': '../../assets/images/1.jpg',
        'src' : 'http://cache.utovr.com/s1u2t570n4rbyeuw8b/L2_jl5imnb78mmdkiyb.mp4'
      },
      {
        'title': '冰岛跳伞全程',
        'cover': '../../assets/images/2.jpg',
        'src' : 'http://cache.utovr.com/s1u0e6hw68mba2zsuw/L2_1920_3_25.mp4'
      },
      {
        'title': '里约跳伞全程',
        'cover': '../../assets/images/3.jpg',
        'src' : 'http://cache.utovr.com/s1yqos66d2whbkldcl/L2_88b0t24ahuqyzin3.mp4'
      },
      {
        'title': '波科诺山跳伞全程',
        'cover': '../../assets/images/4.jpg',
        'src' : 'http://cache.utovr.com/s1cpmktseudbjfvl1o/L2_1920_3_25.mp4'
      },
      {
        'title': '新西兰跳伞全程',
        'cover': '../../assets/images/5.jpg',
        'src' : 'http://cache.utovr.com/s1kmemilhfrkdkh7bb/L2_1920_3_25.mp4'
      },
      {
        'title': '凯恩斯跳伞全程',
        'cover': '../../assets/images/6.jpg',
        'src' : 'http://cache.utovr.com/s1bnhbvyezvor6ugjd/L2_1920_3_25.mp4'
      },
    ]

  }
}
