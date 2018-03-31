import { User, Login } from './../../model/model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import AV from "leancloud-storage";
import { HttpProvider } from '../http/http';

/*
  Generated class for the UserServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServicesProvider {

  constructor(public http: HttpProvider) {

  }


  /**
   * 用户登录
   *
   * @author qin
   * @param {Login} body
   * @returns {Observable<User>}
   * @memberof UserServicesProvider
   */
  userLogin(body: Login): Observable<User> {
    return new Observable(observable => {
      this.http.get('login.json', body).subscribe((f: any) => {
        observable.next(f.data)
      }, err => {
        console.log('登录错误,', err);
      })
    })
  }


  userRejister(): void {
    let UserObject = AV.Object.extend('_User');
    let userObject = new UserObject();
    let date = new Date();
    userObject.set('username', '秦小波');
    userObject.set('mobilePhoneNumber', '15016952559');
    userObject.set('password', 'xiaobo1992');
    userObject.save().then((f) => {
      console.log('云端返回数据是,', f)
    }, (error) => {
      console.log('云端返回错误是,', error)
    });
  }

  sendAuthCode(phone: number): Promise<any> {
    return new Promise((resolve, reject) => {
      AV.Cloud.requestSmsCode(`${phone}`).then((success) => {
        resolve(success)
      }, (error) => {
        reject(error)
      });
    })
  }
}
