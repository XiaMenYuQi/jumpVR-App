import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {
  getAppData() {
    return {
      'logo': 'assets/icon/icon-app.png',
      'name': 'VR跳伞',
      'version' : '1.0',
      'company' : '云南夏商科技有限公司',
      'companyEn' : 'Yunnan Xiashang Technolocy Co,Ltd',
      'bgColor' : '#fff'
    }
  }
}
