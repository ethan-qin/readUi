import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the NativeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NativeProvider {

  constructor(
    private storage: Storage
  ) {
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
}
