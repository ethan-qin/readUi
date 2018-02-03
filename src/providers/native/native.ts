import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { CodePush } from "@ionic-native/code-push";
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Vibration } from '@ionic-native/vibration';

import { BaseUI } from "../../common/baseUI";
import { IS_DEBUG, CODE_PUSH_key } from './../api/api';
/*
  Generated class for the NativeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NativeProvider extends BaseUI {

  constructor(
    private codePush: CodePush,
    private platform: Platform,
    private storage: Storage,
    private vibration: Vibration,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    super()
    console.log('加载native模块');
  }


  /**
   * 获取本地存储
   *
   * @author qin
   * @param {any} readUser
   * @returns {Promise<any>}
   * @memberof NativeProvider
   */
  getStorage(name: string): Promise<any> {
    return new Promise(resolve => {
      this.storage.get(name).then(f => {
        resolve({
          stu: true,
          data: f
        })
      }, err => {
        resolve({
          stu: false,
          data: err
        })
      })
    })
  }



  /**
   * 保存数据到本地存储
   *
   * @author qin
   * @param {string} name
   * @param {*} data
   * @returns {Promise<any>}
   * @memberof NativeProvider
   */
  setStorage(name: string, data: any): Promise<any> {
    return new Promise(resolve => {
      this.storage.set(name, data).then(f => {
        resolve({
          stu: true,
          data: '数据写入完成'
        })
      }, err => {
        resolve({
          stu: false,
          data: '数据写入失败'
        })
      })
    })
  }


  /**
   * 设备震动
   *
   * @author qin
   * @memberof NativeProvider
   */
  shake(): void {
    this.vibration.vibrate([50, 100])
  }

  /**
   * 是否为真机
   *
   * @author qin
   * @returns {boolean}
   * @memberof NativeProvider
   */
  isMobile(): boolean {
    return this.platform.is('mobile') && !this.platform.is('mobileweb')
  }

  /**
   * 平台是否是安卓
   *
   * @author qin
   * @returns {boolean}
   * @memberof NativeProvider
   */
  isAndroid(): boolean {
    return this.isMobile && this.platform.is('android');
  }

  /**
   * 平台是否是ios
   *
   * @author qin
   * @returns {boolean}
   * @memberof NativeProvider
   */
  isIos(): boolean {
    return this.isMobile && this.platform.is('ios');
  }


  /**
   * 热更新
   *
   * @author qin
   * @memberof NativeProvider
   */
  sync() {
    if (this.isMobile()) {
      let deploymentKey = '';
      if (this.isAndroid() && IS_DEBUG) {
        deploymentKey = CODE_PUSH_key.android.Staging
      }
      if (this.isAndroid() && !IS_DEBUG) {
        deploymentKey = CODE_PUSH_key.android.Production
      }
      if (this.isIos() && IS_DEBUG) {
        deploymentKey = CODE_PUSH_key.ios.Staging
      }
      if (this.isIos() && !IS_DEBUG) {
        deploymentKey = CODE_PUSH_key.ios.Production
      }

      this.codePush.sync({ deploymentKey: deploymentKey }).subscribe(f => {
        let loader = super.showLoading(this.loadingCtrl, '更新中');
        if (f == 0) {
          loader.dismissAll();
          let toast = super.showToast(this.toastCtrl, 'top', '已是最新版本');
          toast.dismissAll();
        } else if (f == 3) {
          loader.dismissAll()
          let toast = super.showToast(this.toastCtrl, 'top', '更新出错');
          toast.dismissAll();
        } else if (f == 5) {
          console.log('[CodePush]:检查是否有更新;syncStatus:' + f);
        } else if (f == 7) {
          console.log('[CodePush]:准备下载安装包;syncStatus:' + f);
        } else if (f == 8) {
          console.log('[CodePush]:下载完成准备安装;syncStatus:' + f);
        } else {
          console.log('[CodePush]:其他状态;syncStatus:' + f);
          this.codePush.restartApplication()
        }
      })
    }
  }

}
