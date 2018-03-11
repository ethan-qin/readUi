import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

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
}
