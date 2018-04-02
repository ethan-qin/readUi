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

  /**
   * 发送验证码
   * 
   * @author qin
   * @param {number} phone 
   * @returns {Promise<any>} 
   * @memberof UserServicesProvider
   */
  sendAuthCode(phone: number): Promise<any> {
    return new Promise((resolve, reject) => {
      AV.Cloud.requestSmsCode(`${phone}`).then((success) => {
        resolve(success)
      }, (error) => {
        reject(error)
      });
    })
  }

  /**
   * 验证码登录
   * 
   * @author qin
   * @param {number} phone 
   * @param {number} authCode 
   * @returns {Promise<any>} 
   * @memberof UserServicesProvider
   */
  loginByAuthCode(phone: number, authCode: number): Promise<any> {
    return new Promise((resolve, reject) => {
      AV.User.signUpOrlogInWithMobilePhone(`${phone}`, `${authCode}`).then((success: any) => {
        let userInfo = JSON.parse(JSON.stringify(success));
        userInfo.sessionToken = success._sessionToken;
        console.log(JSON.stringify(success));

        resolve(userInfo)
      }, (error) => {
        let json = JSON.parse(JSON.stringify(error));
        if (json.code == 603) {
          reject({
            stu: false,
            data: '验证码错误'
          })
        } else {
          reject({
            stu: false,
            data: '系统错误，请提交反馈'
          })
        }
      });
    })
  }


  /**
   * 退出登录
   * 
   * @author qin
   * @returns {Promise<any>} 
   * @memberof UserServicesProvider
   */
  loginOut(): Promise<any> {
    return new Promise((resolve, reject) => {
      AV.User.logOut().then(success => {
        console.log('退出登录信息', success);
        resolve()
      }, err => {
        console.log('退出失败信息', err)
        reject()
      })
    }
    )
  }

  uploadAvatar(imgDate: string): Promise<any> {
    let img = { base64: imgDate };
    let file = new AV.File('avatar.jpg', img);
    return new Promise((resolve, reject) => {
      let currentUser = AV.User.current();
      if (!currentUser) {
        reject({
          stu: false,
          message: '无效的用户',
          data: ''
        })
      }
      let userCourseMapTom = new AV.Object('UserCourseMap');
      userCourseMapTom.set('user', currentUser);
      userCourseMapTom.set('avatar', file);
      let map = userCourseMapTom.save();
      let uploadImg = file.save();
      Promise.all([uploadImg, map]).then(f => {
        resolve({
          stu: true,
          message: '上传成功',
          data: f
        })
      }, err => {
        reject({
          stu: false,
          message: '服务器错误',
          data: err
        })
      })
    })
  }

  getUserInfo(): Promise<any> {
    return new Promise((resolve, reject) => {
      let currentUser = AV.User.current();
      currentUser.isAuthenticated().then((authenticated) => {
        if (authenticated) {
          let sessionToken = AV.User.current().getSessionToken();
          AV.User.become(sessionToken).then((user: any) => {
            // console.log(JSON.stringify(user));
            let query = new AV.Query('_User');
            // query.equalTo("username", "18339620640");
            // query.find({ sessionToken: sessionToken }).then(f=>{
            //   console.log(f);
            // })
            query.equalTo('mobilePhoneNumber', '18339620640');
            query.include('avatar');
            console.log("用户信息是",user);
            
            query.find().then((list: any) => {
              list.map(todo => {
                console.log('Todo',JSON.stringify(todo));
                var file = todo.get('avatar');
                console.log("file",file);
                
                console.log('file.url', file.url());
              });
            });
          })
        }
      });
    })
  }
}
