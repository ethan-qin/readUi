import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  customMade: number = 0; //自定义金额
  quota: any = [
    {
      id: 1,
      currency: 1000,     // 获得虚拟币
      pay: 10,            // 应付金额
      customMade: false,   // 是否允许用户自定义金额
      checked: true       // 是否选中
    },
    {
      id: 2,
      currency: 3000,
      pay: 30,
      customMade: false,
      checked: false
    },
    {
      id: 3,
      currency: 5000,
      pay: 50,
      customMade: false,
      checked: false
    },
    {
      id: 4,
      currency: 10000,
      pay: 100,
      customMade: false,
      checked: false
    },
    {
      id: 5,
      currency: 50000,
      pay: 500,
      customMade: false,
      checked: false
    },
    {
      id: 6,
      currency: 0,
      customMade: true,
      pay: 0,
      checked: false
    },
  ]

  pay: any = {
    way: 'Alipay',  // 付款方式
    num: 0,         // 付款金额
    stu: false      // 是否可以提交
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
    this.setPay()
  }

  /**
   * 切换预定义额度
   * 
   * @author qin
   * @private
   * @param {any} item 
   * @memberof PaymentPage
   */
  private change(item): void {
    this.quota.forEach(element => {
      if (item.id == element.id) {
        element.checked = true
      } else {
        element.checked = false
      }
    });
    this.setPay()
  }

  /**
   * 选择自定义金额事件
   * 
   * @author qin
   * @private
   * @param {any} item 
   * @memberof PaymentPage
   */
  private focus(item) {
    this.change(item);
  }


  /**
   * 选择自定义金额键入金额事件
   * 
   * @author qin
   * @private
   * @memberof PaymentPage
   */
  private input(): void {
    this.quota.forEach(element => {
      if (element.id == 6) {
        element.pay = this.customMade;
        element.currency = this.customMade * 10;
      }
    });
    this.setPay()
  }

  /**
   * 当前充值金额
   * 
   * @author qin
   * @private
   * @memberof PaymentPage
   */
  private setPay(): void {
    this.quota.forEach(element => {
      if (element.checked) {
        this.pay.num = element.pay;
        if (element.pay > 0) {
          this.pay.stu = true;
        } else {
          this.pay.stu = false;
        }
      }
    });
  }

  private goAgreement(): void {
    this.modalCtrl.create('AgreementPage').present()
  }
}
