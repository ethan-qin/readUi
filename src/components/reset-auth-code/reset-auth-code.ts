import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserServicesProvider } from '../../providers/user-services/user-services';

/**
 * Generated class for the ResetAuthCodeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'reset-auth-code',
  templateUrl: 'reset-auth-code.html'
})
export class ResetAuthCodeComponent {
  @Input('phone') phone: number;  // 手机号码
  @Output() callBackMessage = new EventEmitter(); // 回掉信息
  stu: boolean = true;// 是否可以发送信息
  time: number;
  start: string = '点击&nbsp;&nbsp;获取验证码';
  pending: string = '秒后&nbsp;重新获取';
  info: string;
  text: string;
  constructor(
    public userServe: UserServicesProvider
  ) {
    this.info = this.start;
  }

  sendMessage(): void {
    console.log(this.phone);
    if (!this.phone) {
      return;
    }
    if (this.stu) {
      this.userServe.sendAuthCode(this.phone).then((f) => {
        console.log(f)
      }, err => {
        console.log('err', err)
      })
      this.stu = false;
      this.time = 60;
      let Time = setInterval(() => {
        this.time--;
        if (this.time == 0) {
          this.stu = true;
          this.info = this.start;
          clearInterval(Time)
          this.time = 60;
        }
      }, 1000);
      this.info = this.pending;
    }
  }
}
